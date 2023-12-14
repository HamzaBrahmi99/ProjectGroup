const fs = require("fs");
const os = require("os");
const Instructions = require('./Instructions');
const ControlFlowInstructions = require('./ControlFlowInstructions');
const GraphManager = require('./GraphManager');
const Stack = require('./Stack');
const Module = require('./Module');
//TODO: la gestione dei return all'interno degli if è veramente complicata. 
//In questa implementazione non è possibile avere un return all'interno di un if, 
//ma se lo si vuole aggiungere bisogna gestire i casi: 
//- Se il return è in un solo branch, in entrambi. 
//- Se è presente in uno o netrambi i branch ma: all'interno dell'if matcho il numero di elementi 
// nello stack con i risultati della funzione, anche se ho ancora elementi nello stack reale prima del branch. (perchè gli if partono da uno stack vuoto loro)
// Si può gestire fixando lo stack dopo ma diventa brutto, in quanto ho istruzioni dopo il return, fuori dall'if.
//
//Per ora ho i return non sono disponibili all'interno degli if.
class WasmGenerator {
    constructor() {
        this.graphManager = new GraphManager();
        this.instructions = new Instructions();
        this.controlFlowInstructions = new ControlFlowInstructions();
        this.module = new Module();
        this.stack = new Stack();
        this.functionBodies = [];
        this.functionTypes = [];
        this.functionTypesByIndex = [];

        //Personalization of the generator
        this.allowed_types = ["i32"]; //array of allowed types
        this.max_number_of_functions = 20;  //max number of functions
        this.max_number_of_params = 4;  //max number of params
        this.max_number_of_results = 2; //max number of results
        this.min_number_of_instructions = 15; //min number of instructions for a function
        this.max_number_of_instructions = 30; //max number of instructions for a function (to avoid infinite loop)
        //Call instructions
        this.probability_of_call = 0.4; //prob to have a call/call_indirect
        this.probability_of_call_indirect = 0.6; //prob to have a call_indirect as the call
        //If instructions
        this.probability_of_if = 0.4; //prob to have an if
        this.maxNestedIfs = 1;  //max nested if
        this.min_instr_for_if = 5; //min number of instructions for an if branch

        //Inizialization of the generator variables
        this.max_number_of_types = this.allowed_types.length * (this.max_number_of_params + this.max_number_of_results);
        this.nestedIfCounter = 0;
        this.locals = [];
        this.localCounter = -1;
        this.returnExit = false;
    }
    reset() {
        this.graphManager.reset();
        this.module = new Module();
        this.stack = new Stack();
        this.functionBodies = [];
        this.functionTypes = [];
        this.functionTypesByIndex = [];
        this.nestedIfCounter = 0;
        this.locals = [];
        this.localCounter = -1;
        this.returnExit = false;
    }
    generateModule(wat_name) {
        this.reset();
        this.generateFunctionTypes();
        this.assignRandomFunctionTypeToEachFunction();
        this.module.generateFunctionTable(this.max_number_of_functions);
        this.module.addStartExport(this.getRandomInt(0, this.max_number_of_functions - 1));
        this.generateFunctionBodies();
        this.module.closeModule();
        this.module.saveToFile(wat_name);
    }

    generateFunctionTypes() {
        this.functionTypes = [];
        this.functionTypesByIndex = [];
      
        for (let i = 0; i < this.max_number_of_types; i++) {
          const numParams = this.getRandomInt(0, this.max_number_of_params);
          const numResults = this.getRandomInt(0, this.max_number_of_results);
      
          const params = [];
          for (let j = 0; j < numParams; j++) {
            const typeIndex = this.getRandomInt(0, this.allowed_types.length - 1);
            params.push(this.allowed_types[typeIndex]);
          }
      
          const results = [];
          for (let j = 0; j < numResults; j++) {
            const typeIndex = this.getRandomInt(0, this.allowed_types.length - 1);
            results.push(this.allowed_types[typeIndex]);
          }
      
          const funcType = { params, results };
          // Check if funcType is already in this.functionTypes
          const isDuplicate = this.functionTypes.some(type => 
            JSON.stringify(type) === JSON.stringify(funcType)
          );
      
          if (!isDuplicate) {
            this.functionTypes.push(funcType);
            this.functionTypesByIndex.push(this.functionTypes.length - 1); // Add the index to functionTypesByIndex
            // Add the function type to the module
            this.module.addFunctionType(funcType);
          }
        }
    }

    assignRandomFunctionTypeToEachFunction() {
        this.functionTypesByIndex = [];
        for (let i = 0; i < this.max_number_of_functions; i++) {
            this.functionTypesByIndex[i] = this.getRandomInt(0, this.functionTypes.length - 1);
        }
    }
    generateFunctionBodies() {
        this.functionBodies = [];
        //adds all the calls to the control flow instructions
        for(let i = 0; i < this.max_number_of_functions; i++){
          const type = this.functionTypes[this.functionTypesByIndex[i]];
          this.controlFlowInstructions.addCallInstructions('call',i, type);
          this.controlFlowInstructions.addCallIndirectInstructions('call_indirect', i, this.functionTypesByIndex[i], type);
        }
        for (let i = 0; i < this.max_number_of_functions; i++) {
            const type = this.functionTypes[this.functionTypesByIndex[i]];
            const funcBody = this.generateFunctionBody(i,type);
            this.module.addFunction(i, this.functionTypesByIndex[i], type.params, type.results, funcBody);
        }
    }

      generateFunctionBody(funcIndex, funcType) {
        this.stack = new Stack();
        let body = '';
        let stackState = this.stack.getState();
        //Genero n_parmas locals
        let localsBody = this.generateLocals(funcType.params.length);
        // Generate instructions for the function body
        let newBody = this.generateInstructions(body,stackState, this.min_number_of_instructions, funcType.results.length, null, funcType);
        body += localsBody;
        body += newBody.body;
        stackState = newBody.stackState;
        this.locals = [];
        return body;
    }
  
    //TODO: per adesso ho bannato i return all'interno degli if.
    generateInstructions(body,stackState, min_instructions, number_of_result, instruction_banned_name = null, funcType) {
      let number_of_params = funcType.params.length;
      let instructionCount = 0;
      this.returnExit = false;
      while (instructionCount < min_instructions) {
        //To avoid infinite loop, after max_number_of_instructions instructions, fix the stackState
        if (instructionCount > this.max_number_of_instructions) {
          let fixed = this.fixStackState(stackState, number_of_result);
          body += fixed.body;
          stackState = fixed.stackState;
          return {
            body: body,
            stackState: stackState
          }
        }

        instructionCount++;//genero la i esima istruzione
        let possibleInstructions = this.getPossibleInstructions(stackState, this.instructions);
        if(number_of_params <= 0){
          possibleInstructions = possibleInstructions.filter(instr => instr.name !== "get");
        }
        //se non ho locals e params non posso fare local.set
        if(number_of_params <= 0 && this.locals.length <= 0){
          possibleInstructions = possibleInstructions.filter(instr => instr.name !== "set");
        }
        //let possibleControlFlowInstructions = this.getPossibleInstructions(stackState, this.controlFlowInstructions);
        if(stackState.length > 0 && Math.random() < this.probability_of_if && instruction_banned_name !== "if"){
          let result;
          //if the if is the last instruction, it must have the same number of elements as the function results
          if(instructionCount === number_of_result){
            result = this.generateIfInstruction(stackState, number_of_result, funcType, true);
          } else {
            result = this.generateIfInstruction(stackState, number_of_result, funcType,false);
          }
          body += result.body;
          stackState = result.stackState;
          this.stack.setState(stackState);
        } else {
          if(Math.random() < this.probability_of_call){
            let callType = Math.random() < this.probability_of_call_indirect ? 'call' : 'call_indirect';
            let result = this.getRandomCallInstruction(stackState, callType);
            body += result.body;
            stackState = result.stackState;
            this.stack.setState(stackState);
          } else {
            let selectedInstruction = possibleInstructions[this.getRandomInt(0, possibleInstructions.length - 1)];
            if(selectedInstruction.name === "const"){
              let result = this.handleConstInstruction(stackState, selectedInstruction);
              body += result.body;
              stackState = result.stackState;
              this.stack.setState(stackState);  
            } else if(selectedInstruction.name === "get"){
              //local.get prende i parametri dalla funzione e li mette nello stack, local.set prende il valore dalla top dello stack e lo mette nella variabile locale
              let result = this.handleLocalGetInstruction(stackState, selectedInstruction, number_of_params);
              body += result.body;
              stackState = result.stackState;
              this.stack.setState(stackState);
            } else if(selectedInstruction.name === "set"){
              let result = this.handleLocalSetInstruction(stackState, selectedInstruction, number_of_params);
              body += result.body;
              stackState = result.stackState;
              this.stack.setState(stackState);
            } else if(instruction_banned_name !== "return" && instruction_banned_name !== "if" && stackState.length === number_of_result && instructionCount === min_instructions && !this.returnExit){
              let result = this.handleReturnInstruction(stackState, funcType.results.length);
              this.returnExit = true;
              body += result.body;
              stackState = result.stackState;
              this.stack.setState(stackState);
              return {
                body: body,
                stackState: stackState
              }
            } else {
              body += selectedInstruction.toString() + '\n';
              stackState = this.updateStackState(stackState, selectedInstruction);
              this.stack.setState(stackState);
            }
          }
        }    
      }

        // Continue generating instructions until the elements in the stackState matches the function results length
      while (stackState.length !== number_of_result && this.returnExit === false) {
        if (instructionCount > this.max_number_of_instructions) {
          let fixed = this.fixStackState(stackState, number_of_result);
          body += fixed.body;
          stackState = fixed.stackState;
          this.stack.setState(stackState);
          return {
            body: body,
            stackState: stackState
          }
        }
        
        instructionCount++;//genero la i esima istruzione dopo le min_instructions
        //if call instruction
        if(stackState.length > 0 && Math.random() < this.probability_of_if  && instruction_banned_name !== "if"){
          let result;
          //console.log("Wbefore if stackState: ", stackState);
          if(instructionCount === number_of_result){
            result = this.generateIfInstruction(stackState, number_of_result, funcType, true);
          } else {
            result = this.generateIfInstruction(stackState, number_of_result, funcType, false);
          }
          body += result.body;
          stackState = result.stackState;
          this.stack.setState(stackState);
          //console.log("Wafter if stackState: ", stackState);
        } else {
          let possibleInstructions = this.getPossibleInstructions(stackState, this.instructions);
          if(number_of_params <= 0){
            possibleInstructions = possibleInstructions.filter(instr => instr.name !== "get");
          }
          if(number_of_params <= 0 && this.locals.length <= 0){
            possibleInstructions = possibleInstructions.filter(instr => instr.name !== "set");
          }
          if (possibleInstructions.length > 0) {
            let selectedInstruction = possibleInstructions[this.getRandomInt(0, possibleInstructions.length - 1)];
            if(Math.random() < this.probability_of_call){
              let callType = Math.random() < this.probability_of_call_indirect ? 'call' : 'call_indirect';
              let result = this.getRandomCallInstruction(stackState, callType);
              body += result.body;
              stackState = result.stackState;
              this.stack.setState(stackState);
            } else {
              if(selectedInstruction.name === "const"){
                let result = this.handleConstInstruction(stackState, selectedInstruction);
                body += result.body;
                stackState = result.stackState;
                this.stack.setState(stackState);  
              } else if(selectedInstruction.name === "get"){
                let result = this.handleLocalGetInstruction(stackState, selectedInstruction, number_of_params);
                body += result.body;
                stackState = result.stackState;
                this.stack.setState(stackState);
              } else if(selectedInstruction.name === "set"){
                let result = this.handleLocalSetInstruction(stackState, selectedInstruction, number_of_params);
                body += result.body;
                stackState = result.stackState;
                this.stack.setState(stackState);
              } else if(instruction_banned_name !== "return" && instruction_banned_name !== "if" && stackState.length === funcType.results.length && !this.returnExit){
                let result = this.handleReturnInstruction(stackState, funcType.results.length);
                this.returnExit = true;
                body += result.body;
                stackState = result.stackState;
                this.stack.setState(stackState);
                return {
                  body: body,
                  stackState: stackState
                }
              } else {
                body += selectedInstruction.toString() + '\n';
                stackState = this.updateStackState(stackState, selectedInstruction);
                this.stack.setState(stackState);
              }
            }
          }
        }
      }
      //body += ';;While to --------------------- For\n'
      return {
        body: body,
        stackState: stackState
      }
    }
    
    handleReturnInstruction(stackState, number_of_result) {
      let body = "";
      this.controlFlowInstructions.addReturnInstructions(number_of_result); 
      let returnInstructions = this.controlFlowInstructions.filter(instr => instr.name === 'return');
      let returnInstruction = returnInstructions[this.getRandomInt(0, returnInstructions.length - 1)]
      stackState = this.updateStackState(stackState, returnInstruction);
      this.controlFlowInstructions.removeReturnInstructions();
      body += returnInstruction.toString() + '\n';
      return {
        body: body,
        stackState: stackState
      }
    }
    handleLocalGetInstruction(stackState, instruction, number_of_params) {
      let total_gets_possible = this.locals.length + number_of_params;
      let param_index = this.getRandomInt(0, total_gets_possible - 1);
      let body = "";
        // Adjust the index for local variables
      stackState = this.updateStackState(stackState, instruction);
      if (param_index >= number_of_params) {
        param_index = param_index - number_of_params;
        body += instruction.toString() + " " +`$${this.locals[param_index].name}\n`;
      } else {   
        body += instruction.toString() + " " + param_index + "\n";
      }
        return {
          body: body,
          stackState: stackState
        };
    }
    //(local $var i32) con parentesi!
    generateLocals(number_of_params){
      let body = "";
      let locals = [];
      let number_of_locals = this.getRandomInt(0, number_of_params);
      for(let i = 0; i < number_of_locals; i++){
        let local = {};
        this.localCounter++;
        local.name = "var" + this.localCounter;
        local.type = this.allowed_types[this.getRandomInt(0, this.allowed_types.length - 1)];
        locals.push(local);
        body += "(local $" + local.name + " " + local.type + ")\n";
      }
      this.localCounter = 0;
      this.locals = locals;
      return body;
    }
    handleLocalSetInstruction(stackState, instruction, number_of_params) {
      //ho almeno un local in locals
      let total_gets_possible = this.locals.length + number_of_params;
      let param_index = this.getRandomInt(0, total_gets_possible - 1);
      let body = "";
      // Adjust the index for local variables
      stackState = this.updateStackState(stackState, instruction);
      if (param_index >= number_of_params) {
        param_index = param_index - number_of_params;
        body += instruction.toString() + " " +`$${this.locals[param_index].name}\n`;
      } else {   
        body += instruction.toString() + " " + param_index + "\n";
      }
      return {
        body: body,
        stackState: stackState
      };
    }

    fixStackState(stackState,number_of_result) {
      let body = "";
      let instructions;
      while (stackState.length > number_of_result) {
        instructions = this.getPossibleInstructions(stackState, this.instructions).filter(instr => instr.name === "drop");
        let selectedInstruction = instructions[this.getRandomInt(0, instructions.length - 1)];
        if(selectedInstruction.name === "const"){
          let result = this.handleConstInstruction(stackState, selectedInstruction);
          body += result.body;
          stackState = result.stackState;
        } else {
          body += selectedInstruction.toString() + '\n';
          stackState = this.updateStackState(stackState, selectedInstruction);
        }
      }
      while (stackState.length < number_of_result) {
        instructions = this.getPossibleInstructions(stackState, this.instructions).filter(instr => instr.name === "const");
        let selectedInstruction = instructions[this.getRandomInt(0, instructions.length - 1)];
        let result = this.handleConstInstruction(stackState, selectedInstruction);
        body += result.body;
        stackState = result.stackState;
      }
      return {
        body: body,
        stackState: stackState
      }
    }

    getPossibleInstructions(stackState, instructions) {
        // If the stack is empty, return only the instructions that introduce values to the stack
        let possibleInstructions;
        if (stackState.length === 0) {
          possibleInstructions = instructions.filter(instruction => instruction.produces > 0 && instruction.consumes === 0);
          if(this.locals.lenght === 0) {
            possibleInstructions = possibleInstructions.filter(instruction => instruction.name !== "local.set");
          }
          return possibleInstructions;
        }
        possibleInstructions = instructions.filter(instruction => instruction.consumes <= stackState.length);
        if(this.locals.lenght === 0) {
          possibleInstructions = possibleInstructions.filter(instruction => instruction.name !== "local.set");
        }
        // If the stack is not empty, return the instructions that consume less or equal the number of elements on the stack
        return possibleInstructions;
    }

    generateIfInstruction(stackState, number_of_results = null, funcType = null, lastInstruction) {
      let ifInstruction = '';
      let max_results_for_if = 2; //elementi che produce l'if nello stack alla fine 
      let condition = this.getRandomInt(0,1);
      //If can have results
      let actual_number_of_results = this.getRandomInt(0,max_results_for_if);

      //Se if ultima istruzione devo avere alla fine lo stesso numero di elementi nello stack dei results della funzione.
      if(lastInstruction){
        actual_number_of_results = funcType.results.length;
      }

      // Check if this is a nested if instruction that has reached the max depth, just to avoid the infinite loops
      if (this.nestedIfCounter > this.maxNestedIfs) {
        //If it is, generate random "not-if" instructions
        let result = this.generateInstructions(ifInstruction,stackState, this.min_number_of_instructions, actual_number_of_results, "if", funcType);
        return {
          body: result.body,
          stackState: result.stackState
        } 
      } 
      // Increment the counter of nested if instructions
      this.nestedIfCounter++;
      //Open the if instruction
      let ifIn = this.controlFlowInstructions.filter(instr => instr.name === 'if')[0];
      stackState = this.updateStackState(stackState, ifIn);
      ifInstruction += '(if ';
      if(Math.random() < 0.5 && actual_number_of_results > 0){
        ifInstruction += '(result ';
        for (let i = 0; i < actual_number_of_results; i++) {
          ifInstruction += this.allowed_types[this.getRandomInt(0, this.allowed_types.length - 1)] + ' ';
        }
        ifInstruction += ')\n';
      } else { //Non ha risultati
        actual_number_of_results = 0;
        ifInstruction += '\n';
      }
      
      // Create a copy of the stack state for the then and else blocks
      let thenStackState = new Stack().getState();
      let elseStackState = new Stack().getState();

      //Then
      let thenInstruction = '(then\n';
      let thenResult = this.generateInstructions(thenInstruction,thenStackState, this.min_instr_for_if, actual_number_of_results, "return", funcType);
      thenInstruction = thenResult.body;
      thenStackState = thenResult.stackState;
      //Close the then instruction
      thenInstruction += ')\n';

      //Else can be optional
      let elseInstruction = '';
      let elseResult;// = { body: elseInstruction, stackState: elseStackState };
      let elseProbability = Math.random();
      if (actual_number_of_results > 0 || (elseProbability < 0.5 && actual_number_of_results === 0) ) {
        elseInstruction += '(else\n';
        //Genero istruzioni per l'else
        elseResult = this.generateInstructions(elseInstruction,elseStackState, this.min_instr_for_if,actual_number_of_results, "return", funcType);
        elseInstruction = elseResult.body;
        elseStackState = elseResult.stackState;
        //Close the else instruction
        elseInstruction += ')\n';
      }

      // Append then and else blocks to the ifInstruction
      ifInstruction += thenInstruction;
      ifInstruction += elseInstruction;
      // Update stackState based on resultOfIf
      if(condition === 1){
        thenResult.stackState.forEach(element => {
          stackState.push(element);
        });
      } else if(condition === 0 && actual_number_of_results > 0 || (elseProbability < 0.5 && actual_number_of_results === 0) ){
        elseResult.stackState.forEach(element => {
          stackState.push(element);
        });
      } 
      ifInstruction += ')\n';
      this.nestedIfCounter--;
      return {
        body: ifInstruction,
        stackState: stackState
      }
    }

    getRandomCallInstruction(stackState,name) {
      let callBody = "";
      let callInstructions = this.getPossibleInstructions(stackState,this.controlFlowInstructions.filter(instr => instr.name === name));
      let callInstruction = callInstructions[this.getRandomInt(0, callInstructions.length - 1)];
      if(callInstruction === undefined){
        let constInstruction = this.instructions.filter((instr) => instr.name === `const`)[0];
        let callInstruction = this.handleConstInstruction(stackState, constInstruction);
        callBody += callInstruction.body;
        stackState = callInstruction.stackState;
        return {
          body: callBody,
          stackState: stackState
        }
      }
      if(callInstruction.name === "call"){
        stackState = this.updateStackState(stackState, callInstruction);
        callBody += callInstruction.toString() +"\n";
        return {
          body: callBody,
          stackState: stackState
        }
      } else {
        let constInstruction = this.instructions.filter((instr) => instr.name === `const`)[0];
        let index = callInstruction.getIstance().index;
        let type = callInstruction.getIstance().type;

        //creo una instruzione const con l'indice della funzione da chiamare da caricare nello stack
        let result = this.handleConstInstruction(stackState, constInstruction, index);
        callBody += result.body;
        stackState = result.stackState;
        callBody += callInstruction.toString().concat(" (type " + type + ")\n");
        stackState = this.updateStackState(stackState, callInstruction);//Quando è call_indirect qui dentro consuma uno in più dei parametri richiesti, altrimenti si può fare +1 ai params quando creo le call_indirect all'inizio
        return {
          body: callBody,
          stackState: stackState
        }; 
      }
    }

    handleConstInstruction(stackState, instruction, index = null) {
      let number;
      if(index === null){
        number = this.getRandomInt(0, 100)
      } else {
        number = index;
      }
      if(index === 0 || index === 1){
        stackState = this.updateStackState(stackState, instruction);
      } else {
        stackState = this.updateStackState(stackState, instruction);
      }      
      return {
        body: instruction.toString() + " " + number + "\n",
        stackState: stackState
      };
    }

    updateStackState(stackState, instruction) {
      //Remove the values consumed by the call_indirect from the stack
      if (instruction.name === 'call_indirect') {//si può togliere facendo +1 ai consumes quando creo le call_indirect all'inizio
        stackState.pop();
      }
      // Remove the values consumed by the instruction from the stack
      for (let i = 0; i < instruction.consumes; i++) {
        stackState.pop();
      }
      // Add the values introduced by the instruction to the stack
      for (let i = 0; i < instruction.produces; i++) {
        stackState.push(instruction.type);
      }
      return stackState;
    }

     
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
    /**
     * Generates a node for the callGraph
     * @param {number} function_id index of the function 
     * @param {number} exported_function_id index of the exported funciton
     */
    createNode(function_id, exported_function_id) {
        if (function_id === exported_function_id) {
            this.graphManager.addNode(
            `node${function_id}`,
            `[label="node${function_id}" style = "filled" color="gray"] `
        );
        } else {
            this.graphManager.addNode(
            `node${function_id}`,
            `[label="node${function_id}"]; `
            );
        }
    }

    //TODO: spostare su Module.js come saveToFile
    /**
     * Generates dot data for a graph and writes it to dot file.
     * @param {string} graphName - The name of the graph.
     */
    generateDotData(graphName) {
        this.compiler_cg.forEach((pair) => {
            const [sourceNode, targetNode] = pair;
            this.graphManager.addEdge(sourceNode, targetNode);
        });
        let dotGraph = this.graphManager.generateDotData(graphName);
        fs.writeFileSync(`./output_files/${graphName}.dot`, dotGraph);
    }
}
module.exports = WasmGenerator;