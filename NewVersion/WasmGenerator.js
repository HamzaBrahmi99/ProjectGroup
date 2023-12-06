const fs = require("fs");
const os = require("os");
//TODO: controlli per il numero di elementi nello stack.
//sia prima e dopo le call
//sia per le funzioni
//sia per gli if 
const Instructions = require('./Instructions');
const ControlFlowInstructions = require('./ControlFlowInstructions');
const CallInstruction = require('./CallInstruction');
const GraphManager = require('./GraphManager');
const Stack = require('./Stack');
const Module = require('./Module');
//const generateFunctions = require('./generateFunctions');

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

        this.allowed_types = ["i32"];
        this.max_number_of_functions = 15;
        this.max_number_of_params = 4;
        this.max_number_of_results = 2;
        this.max_number_of_types = this.allowed_types.length * (this.max_number_of_params + this.max_number_of_results);
        this.max_number_of_instructions = 15;
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
        this.functionTypesByIndex = []; // Ensure this is initialized as an empty array
      
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
        for (let i = 0; i < this.max_number_of_functions; i++) {
            const func = this.functionTypes[this.functionTypesByIndex[i]];
            this.controlFlowInstructions.addCallInstructions('call',i, func);
            this.controlFlowInstructions.addCallInstructions('call_indirect',i, func);
            const funcBody = this.generateFunctionBody(i);
            this.module.addFunction(i, this.functionTypesByIndex[i], func.params, func.results, funcBody);
        }
    }

      generateFunctionBody(funcIndex) {
        let body = '';
        let number_of_instructions = this.getRandomInt(1, this.max_number_of_instructions);
        let numParams = this.functionTypes[this.functionTypesByIndex[funcIndex]].params.length;
        let numResults = this.functionTypes[this.functionTypesByIndex[funcIndex]].results.length;
    
        let stackState = this.stack.getState();
            
        for(let i = 0; i < number_of_instructions; i++) {
            //console.log(i + ") Actual stackState: " + stackState.length);
            // Get the list of possible instructions
            let possibleInstructions = this.getPossibleInstructions(stackState);
            //console.log("  --Possible instructions: " + possibleInstructions);
            // Check if there are any possible instructions
            if (possibleInstructions.length > 0) {
                // Generate a random number between 0 and 1
                let randomNumber = Math.random();
                // If the random number is less than probability_of_if, add an 'if' instruction
                if (Math.random() < this.probability_of_if) {
                    body += this.generateIfInstruction(stackState);
                    // The stack state is updated inside the generateIfInstruction method
                } else if (Math.random() < this.probability_of_call_indirect) {
                    // Add a call instruction
                    let callInstruction = this.getRandomCallInstruction(Math.random() < this.probability_of_call_indirect?"call_indirect":"call");
                    //console.log(" --Selected instruction: " + callInstruction);
                    body += callInstruction.toString() + '\n';
                } else {
                    // Select a random instruction from the list
                    let selectedInstruction = possibleInstructions[this.getRandomInt(0, possibleInstructions.length - 1)];
                    //console.log("  --Selected instruction: " + selectedInstruction);
                    // Update the stack state
                    stackState = this.updateStackState(stackState, selectedInstruction);
                    // Use the random instruction
                    body += selectedInstruction.toString() + '\n';
                }
            }
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
        if (!(stackState.length >= 1)) {
            // Create a const instruction
            let constInstruction = this.instructions.filter(instr => instr.type === 'const');
            // Add the const instruction to the stack
            ifInstruction += constInstruction.toString() + '\n';
            // Update the stack state
            stackState = this.updateStackState(stackState, constInstruction);
        }

     ifInstruction = 'if\n';
    // Generate the then block
    let thenInstructionCount = this.getRandomInt(1, this.max_depth_of_if); // Use max_depth_of_if as the maximum
    for (let i = 0; i < thenInstructionCount; i++) {
      let possibleInstructions = this.getPossibleInstructions(stackState);
      let instruction = possibleInstructions[this.getRandomInt(0, possibleInstructions.length - 1)];
      ifInstruction += instruction.toString() + '\n';
      stackState = this.updateStackState(stackState, instruction);
    }
    
    // Generate the else block
    if (this.getRandomInt(0, 1) === 1) {
      ifInstruction += 'else\n';
      let elseInstructionCount = this.getRandomInt(1, this.max_depth_of_if); // Use max_depth_of_if as the maximum
      for (let i = 0; i < elseInstructionCount; i++) {
        let possibleInstructions = this.getPossibleInstructions(stackState);
        let instruction = possibleInstructions[this.getRandomInt(0, possibleInstructions.length - 1)];
        ifInstruction += instruction.toString() + '\n';
        stackState = this.updateStackState(stackState, instruction);
      }
    }
    
    ifInstruction += 'end\n';
    return ifInstruction;
    }

    getRandomCallInstruction(name) {
        let callInstructions = this.controlFlowInstructions.filter(instruction => instruction.name === name);
        let randomIndex = this.getRandomInt(0, callInstructions.length - 1);
        return callInstructions[randomIndex];
    }

      updateStackState(stackState, instruction) {
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