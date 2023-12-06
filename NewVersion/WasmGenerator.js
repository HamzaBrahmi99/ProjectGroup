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
        this.max_number_of_functions = 15;
        this.max_number_of_params = 4;
        this.max_number_of_results = 2;
        this.max_number_of_types = this.allowed_types.length * (this.max_number_of_params + this.max_number_of_results);
        this.min_number_of_instructions = 10;
        this.max_number_of_instructions = 50;
        this.probability_of_call_indirect = 0.6;
        this.probability_of_if = 0.6;
        this.max_depth_of_if = 5;

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
          const isDuplicate = this.module.functionTypes.some(type => 
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
            const funcBody = this.generateFunctionBody(i);
            this.module.addFunction(i, this.functionTypesByIndex[i], type.params, type.results, funcBody);
        }
    }

      generateFunctionBody(funcIndex) {
          let body = '';
          let number_of_instructions = this.getRandomInt(1, this.max_number_of_instructions);
          let func = this.functionTypes[this.functionTypesByIndex[funcIndex]];
          let numParams = func.params.length;
          let numResults = func.results.length;
      
          let stackState = this.stack.getState();
              
          let instructionCount = 0;
          let i=0;
          while (stackState.length < func.results.length || instructionCount < this.min_number_of_instructions) {
          // && instructionCount < this.max_number_of_instructions) {
            //console.log(`Stack state length: ${stackState.length}, function results length: ${func.results.length}, instruction count: ${instructionCount}`);
            console.log(i + ") Actual stackState: " + stackState.length);
            i++;
            // Get the list of possible instructions
            let possibleInstructions = this.getPossibleInstructions(stackState);
            //console.log("  --Possible instructions: " + possibleInstructions);
            // Check if there are any possible instructions
            if (possibleInstructions.length > 0) {

                // If the random number is less than probability_of_if, add an 'if' instruction
                if (Math.random() < 0) {//TODO:add this.probability_of_if
                    body += this.generateIfInstruction(stackState);
                    // The stack state is updated inside the generateIfInstruction method
                }
                if (Math.random() < 0.3) {
                    // Add a call instruction
                    let callInstruction = this.getRandomCallInstruction(stackState,Math.random() < this.probability_of_call_indirect?"call_indirect":"call");
                    body += callInstruction;
                    //console.log(" --Selected call instruction: " + callInstruction);
                } else {
                    // Select a random instruction from the list
                    let selectedInstruction = possibleInstructions[this.getRandomInt(0, possibleInstructions.length - 1)];
                    //console.log("  --Selected instruction: " + selectedInstruction);
                    // Update the stack state
                    stackState = this.updateStackState(stackState, selectedInstruction);
                    // Use the random instruction
                    if(selectedInstruction.name === "const"){
                      body += selectedInstruction.toString() + " " + this.getRandomInt(0,100) + '\n';
                    } else{
                      //TODO: gestire locals.get e locals.set
                      body += selectedInstruction.toString() + '\n';
                    }
                  }
              }
              this.stack.setState(stackState);
              instructionCount++;
            }

        return body;
    }

    getPossibleInstructions(stackState) {
        // If the stack is empty, return only the instructions that introduce values to the stack
        if (stackState.length === 0) {
            return this.instructions.filter(instruction => instruction.produces > 0 && instruction.consumes === 0);
        }
        // If the stack is not empty, return the instructions that consume less or equal to the number of elements on the stack
        return this.instructions.filter(instruction => instruction.consumes <= stackState.length);
    }

    generateIfInstruction(stackState) {
        let ifInstruction = '';
        // Create a const instruction
        let constInstruction = this.instructions.filter(instr => instr.name === `const`)[0];
        //console.log(" --Selected instruction: " + constInstruction);
        // Add the const instruction to the stack
        ifInstruction += constInstruction.toString() + " "+ this.getRandomInt(0, 1) + '\n';
        //console.log(" --Selected instruction: " + ifInstruction);
        let ifIn = this.controlFlowInstructions.filter(instr => instr.name === 'if')[0];
        //console.log(" --Selected instruction: " + constInstruction.consumes);
        // Update the stack state
        stackState = this.updateStackState(stackState, constInstruction);
        stackState = this.updateStackState(stackState, ifIn);

        ifInstruction += '(if\n';
        // Generate the then block
        
        let thenStackState = [...stackState];
        let elseStackState = [...stackState];
        //console.log(" --Selected instruction: " + thenStackState);
        ifInstruction += '(then\n';
        let thenInstructionCount = this.getRandomInt(1, this.max_depth_of_if); // Use max_depth_of_if as the maximum
        for (let i = 0; i < thenInstructionCount; i++) {
          let possibleInstructions = this.getPossibleInstructions(thenStackState);
          //toDO:rimuovi
          possibleInstructions = possibleInstructions.filter(instr => instr.name !== 'if');
          let instruction = possibleInstructions[this.getRandomInt(0, possibleInstructions.length - 1)];
          if(instruction.name === "const"){
            ifInstruction += instruction.toString() + " " + this.getRandomInt(0,100) + '\n';
          } else{
            ifInstruction += instruction.toString() + '\n';
          }
          thenStackState = this.updateStackState(thenStackState, instruction);
        }
        
        ifInstruction += ')\n';
        // Generate the else block
        ifInstruction += '(else\n';
          let elseInstructionCount = this.getRandomInt(1, this.max_depth_of_if); // Use max_depth_of_if as the maximum
          for (let i = 0; i < elseInstructionCount; i++) {
            let possibleInstructions = this.getPossibleInstructions(elseStackState);
            //toDO:rimuovi
          possibleInstructions = possibleInstructions.filter(instr => instr.name !== 'if');
          let instruction = possibleInstructions[this.getRandomInt(0, possibleInstructions.length - 1)];
          if(instruction.name === "const"){
            ifInstruction += instruction.toString() + " " + this.getRandomInt(0,100) + '\n';
          } else{
            ifInstruction += instruction.toString() + '\n';
          }
          elseStackState = this.updateStackState(elseStackState, instruction);
          }
        ifInstruction += ')\n';
        //Close the if instruction
        ifInstruction += ')\n';
        //ifInstruction += 'end\n';
        return ifInstruction;
    }

    //TODO: fix this
    getRandomCallInstruction(stackState,name) {
      //console.log("indici: " + this.functionTypesByIndex)
      let callIn = "";
      let callInstructions = this.controlFlowInstructions.filter(instruction => instruction.name === name && instruction.consumes <= stackState.length);
      if(callInstructions.length === 0){
        let instructions = this.getPossibleInstructions(stackState);
        instructions = instructions.filter(instr => instr.consumes <= 0);
        let random = this.getRandomInt(0, instructions.length - 1);
        let inst = instructions[random];
        if(inst.name === "const"){
          stackState = this.updateStackState(stackState, inst);
          this.stack.setState(stackState);
          return instructions[random].toString() + " " + this.getRandomInt(0, 100) + "\n";
        }
        else {
          //another instruction that is not call or call_indirect or const
          stackState = this.updateStackState(stackState, inst);
          this.stack.setState(stackState);
          return instructions[random].toString() + "\n";
        }
      }
      let callIndex = this.getRandomInt(0, callInstructions.length - 1);
      let call = callInstructions[callIndex];
/*
      console.log(" --Selected call consume: " + call.consumes);
      console.log(" --prima stack: " + stackState.length);
      stackState = this.updateStackState(stackState, call);
      console.log(" --Selected call produce: " + call.produces);
              
      console.log(" --dopo atack: " + stackState.length);*/

      if(name === "call"){
        stackState = this.updateStackState(stackState, call);
        return callIn += call.toString() +"\n";
      } else {
        let constInstruction = this.instructions.filter(
          (instr) => instr.name === `const`
        )[0];
        let index = call.getIstance().index;
        //console.log("index: " , index);
        let type = call.getIstance().type;
        //console.log("type: " + type);
        callIn += constInstruction.toString().concat(" " + index + "\n");
        callIn += call.toString().concat(" (type " + type + ")\n");
        stackState = this.updateStackState(stackState, constInstruction);
        stackState.pop();
        //need to add the consume of the const for the call_indirect
        stackState = this.updateStackState(stackState, call);
        //creo una instruzione const con l'indice della funzione da chiamare da caricare nello stack
        return callIn;
      }
    }

checkStackStateIfIsEqualToFunctionResults(stackState,results){
  //return la diff, così so quanti elemnti devo mette o togliere per farli combacià
  //return true se sono uguali
}

      updateStackState(stackState, instruction) {
        // Remove the values consumed by the instruction from the stack
        for (let i = 0; i < instruction.consumes; i++) {
          console.log(" --consume: " + i);
          stackState.pop();
        }
      
        // Add the values introduced by the instruction to the stack
        for (let i = 0; i < instruction.produces; i++) {
          console.log(" --produce: " + i);
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