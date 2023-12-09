const fs = require("fs");
const os = require("os");
//TODO: controlli per il numero di elementi nello stack.
//sia prima e dopo le call
//sia per le funzioni
//sia per gli if 
const Instructions = require('./Instructions');
const ControlFlowInstructions = require('./ControlFlowInstructions');
const GraphManager = require('./GraphManager');
const Stack = require('./Stack');
const Module = require('./Module');

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

        //Configurations
        this.allowed_types = ["i32"];
        this.max_number_of_functions = 50;
        this.max_number_of_params = 4;
        this.max_number_of_results = 2;
        this.max_number_of_types = this.allowed_types.length * (this.max_number_of_params + this.max_number_of_results);
        this.min_number_of_instructions = 10;
        this.max_number_of_instructions = 80;
        //Call configuration
        this.probability_of_call = 0.5; //prob to have call or call_indirect
        this.probability_of_call_indirect = 0.6; //prob to have a call_indirect as call
        //If configuration
        this.probability_of_if = 0.5;
        this.max_depth_of_if = 3;
        this.nestedIfCounter = 0;
        this.maxNestedIfs = 3;
        //Locals configuration
        this.localCount = 0;

    }
    reset() {
        this.graphManager.reset();
        this.module = new Module();
        this.stack = new Stack();

        this.functionBodies = [];
        this.functionTypes = [];
        this.functionTypesByIndex = [];
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
          //console.log("controlFlowInstructions: " , this.controlFlowInstructions);
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
        //console.log(`Generating function body for function ${funcIndex} with type ${funcType.params} -> ${funcType.results} ( ${funcType.results.length} )`);
        //let function_type_of_this_body = this.functionTypes[this.functionTypesByIndex[funcIndex]];
        let stackState = this.stack.getState();

        // Generate instructions for the function body
        let result = this.generateInstructions(body,stackState, this.min_number_of_instructions, funcType.results.length);
        body += result.body;
        stackState = result.stackState;
        return body;
    }
    
    //TODO: l'if se sta alla fine deve per forza avere lo stesso numero di eleemnti as result della fuzione
    generateInstructions(body,stackState, min_instructions, number_of_result, instruction_banned_name = null) {
      let instructionCount = 0;
      for (let i = 0; i < min_instructions; i++) {
        if (instructionCount > this.max_number_of_instructions) {
          let fixed = this.fixStackState(stackState, number_of_result);
          //console.log("Fixed stackState: " + fixed.body + " - " + fixed.stackState);
          body += fixed.body;
          stackState = fixed.stackState;
          return {
            body: body,
            stackState: stackState
          }
        }
        //console.log("FUnction result: " + number_of_result + " - " + body + " - " + stackState")
        instructionCount++;
        let possibleInstructions = this.getPossibleInstructions(stackState, this.instructions);
        if (possibleInstructions.length > 0) {
          if(Math.random() < this.probability_of_if && stackState.length === number_of_result-1 && instruction_banned_name !== "if"){  //TODO: Togli il +5, era per non fare l'if durante i test
            //let ifInstruction = this.controlFlowInstructions.filter(instr => instr.name === 'if')[0];
            //console.log("stackState before if: " + stackState.length);
            let result = this.generateIfInstruction(stackState);
            body += result.body;
            stackState = result.stackState;
            this.stack.setState(stackState);
            //console.log("stackState after if: " + stackState.length);
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
              } else {
                stackState = this.updateStackState(stackState, selectedInstruction);
                body += selectedInstruction.toString() + '\n';
                this.stack.setState(stackState);
              }
            }
          }
        }
      }

      // Continue generating instructions until the elements in the stackState matches the function results length
      //instructionCount = 0;
      while (stackState.length !== number_of_result) {
        if (instructionCount > this.max_number_of_instructions) {
          let result = this.fixStackState(stackState, number_of_result);
          body += result.body;
          stackState = result.stackState;
          this.stack.setState(stackState);
          return {
            body: body,
            stackState: stackState
          }
        }
        instructionCount++;
        //if call instruction
        if(Math.random() < this.probability_of_if && stackState.length === number_of_result-1 && instruction_banned_name !== "if"){  //TODO: Togli il +5, era per non fare l'if durante i test
          //let ifInstruction = this.controlFlowInstructions.filter(instr => instr.name === 'if')[0];
          //console.log("stackState before if: " + stackState.length);
          let result = this.generateIfInstruction(stackState);
          body += result.body;
          stackState = result.stackState;
          this.stack.setState(stackState);
          //console.log("stackState after if: " + stackState.length);
        } else {
          let possibleInstructions = this.getPossibleInstructions(stackState, this.instructions);
          if (possibleInstructions.length > 0) {
            let selectedInstruction = possibleInstructions[this.getRandomInt(0, possibleInstructions.length - 1)];
            if(Math.random() < this.probability_of_call){
              let callType = Math.random() < this.probability_of_call_indirect ? 'call' : 'call_indirect';
              //console.log('Before call:', stackState);
              //console.log('Executing:', callType);
              let result = this.getRandomCallInstruction(stackState, callType);
              //console.log('After call:', result.stackState);
              body += result.body;
              stackState = result.stackState;
              this.stack.setState(stackState);
            } else {
              if(selectedInstruction.name === "const"){
                let result = this.handleConstInstruction(stackState, selectedInstruction);
                body += result.body;
                stackState = result.stackState;
                this.stack.setState(stackState);  
              } else {
                stackState = this.updateStackState(stackState, selectedInstruction);
                body += selectedInstruction.toString() + '\n';
                this.stack.setState(stackState);
              }
            }
          }
        }
      }
      return {
        body: body,
        stackState: stackState
      }
}
    fixStackState(stackState,number_of_result) {
      let body = "";
      //console.log("Fixing stackState: " + stackState.length + " - " + number_of_result);
      let instructions;
      while (stackState.length > number_of_result) {
        instructions = this.getPossibleInstructions(stackState, this.instructions).filter(instr => instr.name === "drop");
        //instructions = instructions.filter(instr => instr.name !== "if");//TODO: da togliere, solo per test
        let selectedInstruction = instructions[this.getRandomInt(0, instructions.length - 1)];
        if(selectedInstruction.name === "const"){
          let result = this.handleConstInstruction(stackState, selectedInstruction);
          body += result.body;
          stackState = result.stackState;
        } else {
          body += selectedInstruction.toString() + '\n';
          stackState = this.updateStackState(stackState, selectedInstruction);
        }
        //stackState = this.updateStackState(stackState, selectedInstruction);
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
        if (stackState.length === 0) {
            return instructions.filter(instruction => instruction.produces > 0 && instruction.consumes === 0);
        }
        // If the stack is not empty, return the instructions that consume less or equal to the number of elements on the stack
        return instructions.filter(instruction => instruction.consumes <= stackState.length);
    }

    generateIfInstruction(stackState) {
      let ifInstruction = '';
      let min_instr_for_if = 2;
      let max_results_for_if = 2; //elementi che produce l'if nello stack alla fine 
      let condition = this.getRandomInt(0,1);
      //If can have results
      let actual_number_of_results = this.getRandomInt(1,max_results_for_if);

      // Check if this is a nested if instruction that has reached the max depth
      if (this.nestedIfCounter > this.maxNestedIfs) {
        //console.log("Max nested ifs reached");
        let result = this.generateInstructions(ifInstruction,stackState, this.min_number_of_instructions, actual_number_of_results, "if");
        //console.log(" --Maxed If instruction: " + result.body + " - " + result.stackState);
        return {
          body: result.body,
          stackState: result.stackState
        } 
    } 
    // Increment the counter
    this.nestedIfCounter++;
// Check if this is a non-nested if instruction
if (this.nestedIfCounter === 1) {
  //console.log("Stack before if: " + JSON.stringify(stackState));
}

    

      //Open the if instruction
     //log("Stack before if: " + stackState);
      
      // Create a const instruction for the if condition
      let constInstruction = this.instructions.filter(instr => instr.name === `const`)[0];
      //console.log("Stack before const of if: " + stackState.length);
      let constValue = this.handleConstInstruction(stackState, constInstruction, condition);
      ifInstruction += constValue.body;
      stackState = constValue.stackState;
      //console.log("Stack after const of if: " + stackState.length);
      let ifIn = this.controlFlowInstructions.filter(instr => instr.name === 'if')[0];
      stackState = this.updateStackState(stackState, ifIn);
      //console.log("Stack after if consumes: " + stackState.length);
      ifInstruction += '(if ';
      if(Math.random() < 0.5){
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

      //Devo controllare che il numero di elementi nello stack alla fine sia uguale a resultOfIf
      //Then
      let thenInstruction = '(then\n';
      //Genero istruzioni per il then
      //console.log("State real stack before: " + stackState.length);
      //console.log(" -State copy before then: " + thenStackState.length);
      let thenResult = this.generateInstructions(thenInstruction,thenStackState, min_instr_for_if, actual_number_of_results);
      thenInstruction = thenResult.body;
      thenStackState = thenResult.stackState;
      //console.log(" -State copy after then: " + thenStackState.length);
      //Close the then instruction
      thenInstruction += ')\n';

      //Else can be optional
      let elseInstruction = '';
      let elseResult;// = { body: elseInstruction, stackState: elseStackState };
      //console.log(" -State copy before else: " + elseStackState.length);
      let else_probability = Math.random();
      else_probability--;
      if (actual_number_of_results > 0 || (actual_number_of_results === 0 && else_probability < 0.5)) {
        //Else
        elseInstruction += '(else\n';
        //Genero istruzioni per l'else
        elseResult = this.generateInstructions(elseInstruction,elseStackState, min_instr_for_if,actual_number_of_results);
        //console.log("Else result: " + elseResult.body + " - " + elseResult.stackState);
        elseInstruction = elseResult.body;
        elseStackState = elseResult.stackState;
        //Close the else instruction
        elseInstruction += ')\n';
      }
      //console.log(" -State copy after else: " + elseStackState.length);
      //console.log("State real stack after: " + stackState.length);

      // Append then and else blocks to the ifInstruction
      //console.log("Then: " + thenInstruction);
      ifInstruction += thenInstruction;
      //console.log("Else: " + elseInstruction);
      ifInstruction += elseInstruction;
      //console.log("If fine: " + ifInstruction);
      // Update stackState based on resultOfIf
      if(condition === 1){
        thenResult.stackState.forEach(element => {
          stackState.push(element);
      });
      } else if(condition === 0 && else_probability < 0.5){
        elseResult.stackState.forEach(element => {
          stackState.push(element);
      });
    } 
      ifInstruction += ')\n';

// Check if this is a non-nested if instruction
if (this.nestedIfCounter === 1) {
  //console.log("Stack after if: " + JSON.stringify(stackState));
}
      this.nestedIfCounter--;

      return {
        body: ifInstruction,
        stackState: stackState
      }
    }






    //gli passo call o call_indirect come name, ritorna body e stackState
    getRandomCallInstruction(stackState,name) {
      let callBody = "";
      let callInstructions = this.getPossibleInstructions(stackState,this.controlFlowInstructions.filter(instr => instr.name === name));
      let callInstruction = callInstructions[this.getRandomInt(0, callInstructions.length - 1)];
      if(callInstruction === undefined){
        //console.log("Non ho chiaamte da faa")
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
        let result = this.handleConstInstruction(stackState, constInstruction, index);
        callBody += result.body;
        stackState = result.stackState;

        callBody += callInstruction.toString().concat(" (type " + type + ")\n");
        //need to add the consume of the const for the call_indirect
        stackState = this.updateStackState(stackState, callInstruction);//Occhio che se è call_indirect qui dentro consuma uno in più dei parametri richiesti, altrimenti si può fare +1 ai params quando creo le call_indirect all'inizio
        //creo una instruzione const con l'indice della funzione da chiamare da caricare nello stack
        return {
          body: callBody,
          stackState: stackState
        }; 
      }
    }

    handleConstInstruction(stackState, instruction, index = null) {
      //console.log(`Const instruction: ${instruction.name}`);
      //console.log(` Selected instruction: ${instruction.name}`);
      //console.log(`   Instruction consumes: ${instruction.consumes} Instruction produces: ${instruction.produces}`);
      let number;
      if(index === null){
        number = this.getRandomInt(0, 100)
      } else {
        number = index;
      }
      if(index === 0 || index === 1){
        //console.log(index);
      //console.log(" -Updating before inside the const instruction: " + stackState.length)
      stackState = this.updateStackState(stackState, instruction);
      //console.log(" -Updated after inside the const instruction: " + stackState.length)
      } else {
        stackState = this.updateStackState(stackState, instruction);
      }

      //console.log(`---- Stack state after instruction: ${stackState}`);
      
      return {
        body: instruction.toString() + " " + number + "\n",
        stackState: stackState
      };
    }

      updateStackState(stackState, instruction) {
        //Remove the values consumed by the call_indirect from the stack
        if (instruction.name === 'call_indirect') {//si può togliere facendo +1 ai params quando creo le call_indirect all'inizio
          stackState.pop();
        }
        // Remove the values consumed by the instruction from the stack
        for (let i = 0; i < instruction.consumes; i++) {
          //console.log(" --consume: " + i);
          stackState.pop();
        }
      
        // Add the values introduced by the instruction to the stack
        for (let i = 0; i < instruction.produces; i++) {
          //console.log(" --produce: " + i);
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