const fs = require("fs");
const os = require("os");
const Instructions = require('./Instructions');
const ControlFlowInstructions = require('./ControlFlowInstructions');
const GraphManager = require('./GraphManager');
const Stack = require('./Stack');
const Module = require('./Module');

// Personalization of the logic of the generator
// Config of the function generator
const ALLOWED_TYPES = ["i32"];
const MAX_NUMBER_OF_FUNCTIONS = 80;
const MAX_NUMBER_OF_PARAMS = 10;
const MAX_NUMBER_OF_RESULTS = 5;
const MIN_NUMBER_OF_INSTRUCTIONS = 10;
const MAX_NUMBER_OF_INSTRUCTIONS = 80;
// Config of the probabilities of having those instructions
const PROBABILITY_OF_CALL = 0.9;
const PROBABILITY_OF_CALL_INDIRECT = 0.9;
const PROBABILITY_OF_IF = 0.9;
const PROBABILITY_OF_LOOP = 0.9;
// Config of the if instructions
const MAX_NESTED_IFS = 1;
// Config of the loop instructions
const MAX_NESTED_LOOPS = 2;
const MAX_NUMBER_OF_LOOP_INSTRUCTIONS = 10;

/**
 * Represents a WebAssembly Text generator.
 * @constructor
 */
class WasmGenerator {
    constructor() {
      // Initialization of the generator variables
      this.graphManager = new GraphManager();
      this.compiler_cg = new Set();
      this.instructions = new Instructions();
      this.controlFlowInstructions = new ControlFlowInstructions();
      this.module = new Module();
      this.stack = new Stack();
      this.functionBodies = [];
      this.functionTypes = [];
      this.functionTypesByIndex = [];
      // Personalization of the generator
      this.allowed_types = ALLOWED_TYPES;
      this.max_number_of_functions = MAX_NUMBER_OF_FUNCTIONS;
      this.max_number_of_params = MAX_NUMBER_OF_PARAMS;
      this.max_number_of_results = MAX_NUMBER_OF_RESULTS;
      this.min_number_of_instructions = MIN_NUMBER_OF_INSTRUCTIONS;
      this.max_number_of_instructions = MAX_NUMBER_OF_INSTRUCTIONS;
      // Call instructions
      this.probability_of_call = PROBABILITY_OF_CALL;
      this.probability_of_call_indirect = PROBABILITY_OF_CALL_INDIRECT;
      // If instructions
      this.probability_of_if = PROBABILITY_OF_IF;
      this.maxNestedIfs = MAX_NESTED_IFS;
      this.max_results_for_if = 2;
      //this.min_instr_for_if = MIN_INSTR_FOR_IF;
      // Loop instructions
      this.probability_of_loop = PROBABILITY_OF_LOOP;
      this.maxNestedLoops = MAX_NESTED_LOOPS;
      this.max_number_of_loop_instructions = MAX_NUMBER_OF_LOOP_INSTRUCTIONS;
      // Inizialization of the generator variables
      this.nestedLoopCounter = 0;
      this.isLastInstruction = false;
      this.max_number_of_types = this.allowed_types.length * (this.max_number_of_params + this.max_number_of_results);
      this.nestedIfCounter = 0;
      this.locals = [];
      this.localNameCounter = 0;
      this.returnExit = false;
    }
    
    /**
     * Resets the state of the WasmGenerator.
     */
    reset() {
      this.graphManager.reset();
      this.module = new Module();
      this.stack = new Stack();
      this.compiler_cg = new Set();
      this.functionBodies = [];
      this.functionTypes = [];
      this.functionTypesByIndex = [];
      this.nestedIfCounter = 0;
      this.nestedLoopCounter = 0;
      this.locals = [];
      this.localNameCounter = 0;
      this.returnExit = false;
    }
    /**
     * Checks the correctness of the constants by the user.
     * @throws {Error} If any of the constants are not within the specified range.
     */
    checkCorrectnessOfConstants(){
      if(this.max_number_of_functions <= 0){
        throw new Error("max_number_of_functions must be greater than 0");
      }
      if(this.max_number_of_params < 0){
        throw new Error("max_number_of_params must be at least 0");
      }
      if(this.max_number_of_results < 0){
        throw new Error("max_number_of_results must be at least 0");
      }
      if(this.min_number_of_instructions < 0){
        throw new Error("min_number_of_instructions must be at least 0");
      }
      if(this.max_number_of_instructions < 0){
        throw new Error("max_number_of_instructions must be at least 0");
      }
      if(this.probability_of_call < 0 || this.probability_of_call > 1){
        throw new Error("probability_of_call must be between 0 and 1");
      }
      if(this.probability_of_call_indirect < 0 || this.probability_of_call_indirect > 1){
        throw new Error("probability_of_call_indirect must be between 0 and 1");
      }
      if(this.probability_of_if < 0 || this.probability_of_if > 1){
        throw new Error("probability_of_if must be between 0 and 1");
      }
      if(this.probability_of_loop < 0 || this.probability_of_loop > 1){
        throw new Error("probability_of_loop must be between 0 and 1");
      }
      if(this.maxNestedIfs < 0){
        throw new Error("maxNestedIfs must be at least 0");
      }
      if(this.maxNestedLoops < 0){
        throw new Error("maxNestedLoops must be at least 0");
      }
      if(this.max_number_of_loop_instructions < 0){
        throw new Error("max_number_of_loop_instructions must be at least 0");
      }
   }
    /**
     * Generates a WebAssembly module with random function types, function table, start export, function bodies, and saves it to a .wat file.
     * @param {string} wat_name - The name of the .wat file to save the generated module to.
     */
    generateModule(wat_name) {
      this.reset();
      this.checkCorrectnessOfConstants();
      this.generateFunctionTypes();
      this.assignRandomFunctionTypeToEachFunction();
      this.module.generateFunctionTable(this.max_number_of_functions);
      let export_id = this.getRandomInt(0, this.max_number_of_functions - 1);
      this.module.addStartExport(export_id);
      this.generateFunctionBodies(export_id);
      this.module.closeModule();
      this.module.saveToFileWat(wat_name);
      this.generateDotData(wat_name);
    }

    /**
     * Generates function types with random parameters and results.
     */
    generateFunctionTypes() {
      // Initialize function types and their indices
      this.functionTypes = [];
      this.functionTypesByIndex = [];
      // Generate up to the maximum number of function types
      for (let i = 0; i < this.max_number_of_types; i++) {
        // Determine the number of parameters and results for this function type
        const numParams = this.getRandomInt(0, this.max_number_of_params);
        const numResults = this.getRandomInt(0, this.max_number_of_results);
        // Generate the parameter types
        const params = [];
        for (let j = 0; j < numParams; j++) {
          const typeIndex = this.getRandomInt(0, this.allowed_types.length - 1);
          params.push(this.allowed_types[typeIndex]);
        }
        // Generate the result types
        const results = [];
        for (let j = 0; j < numResults; j++) {
          const typeIndex = this.getRandomInt(0, this.allowed_types.length - 1);
          results.push(this.allowed_types[typeIndex]);
        }
        // Create the function type
        const funcType = { params, results };
        // Check if this function type is a duplicate of an existing one
        const isDuplicate = this.functionTypes.some(type => 
          type.params.join() === funcType.params.join() &&
          type.results.join() === funcType.results.join()
        );
        // If it's not a duplicate, add it to the function types and their indices
        if (!isDuplicate) {
          this.functionTypes.push(funcType);
            // Add the index to functionTypesByIndex
          this.functionTypesByIndex.push(this.functionTypes.length - 1);
          // Add the function type to the module
          this.module.addFunctionType(funcType);
        }
      }
    }
    /**
     * Assigns a random function type to each function.
     */
    assignRandomFunctionTypeToEachFunction() {
      this.functionTypesByIndex = [];
      for (let i = 0; i < this.max_number_of_functions; i++) {
          // Assign a random function type index to the current function
          this.functionTypesByIndex[i] = this.getRandomInt(0, this.functionTypes.length - 1);
      }
    }
    /**
     * Generates the function bodies for the module.
     * 
     * @param {number} export_id - The export ID of the module.
     */
    generateFunctionBodies(export_id) {
      this.functionBodies = [];
      for(let i = 0; i < this.max_number_of_functions; i++){
        // Get the type of the current function
        const type = this.functionTypes[this.functionTypesByIndex[i]];
        // Add call instructions for the current function to the control flow instructions
        this.controlFlowInstructions.addCallInstructions('call',i, type);
        // Add indirect call instructions for the current function to the control flow instructions
        this.controlFlowInstructions.addCallIndirectInstructions('call_indirect', i, this.functionTypesByIndex[i], type);
      }
      for (let i = 0; i < this.max_number_of_functions; i++) {
          // Get the type of the current function
          const type = this.functionTypes[this.functionTypesByIndex[i]];
          // Create a node for the current function
          this.createNode(i, export_id);
          // Reset the locals and the local name counter for the current function
          this.locals = [];
          this.localNameCounter = 0;
          // Reset the return instruction exit flag for the current function
          this.returnExit = false;
          // Generate the body of the current function
          const funcBody = this.generateFunctionBody(i,type);
          // Add the current function to the module
          this.module.addFunction(i, this.functionTypesByIndex[i], type.params, type.results, funcBody);
      }
    }
    /**
     * Generates the body of a function.
     *
     * @param {number} funcIndex - The index of the function.
     * @param {FunctionType} funcType - The type of the function.
     * @returns {string} - The generated function body.
     */
    generateFunctionBody(funcIndex, funcType) {
        this.stack = new Stack();
        let body = '';
        // Get the current state of the stack
        let stackState = this.stack.getState();
        // Update the return instruction with the number of results for the function
        this.controlFlowInstructions.updateReturnInstruction(funcType.results.length);
        // Concatenate the control flow instructions to the linear instructions
        this.instructions.concat(this.controlFlowInstructions.getInstructions());
        // Generate the instructions for the function body
        let newBody = this.generateInstructions(this.instructions, funcIndex, stackState, funcType);
        // Reset the flag that indicates whether the last instruction has been processed
        this.isLastInstruction = false;
        // Generate the locals for the function, based on the necessity of the instructions
        let localsBody = this.generateLocals();
        // Add the locals and the instructions to the function body
        body += localsBody;
        body += newBody.body;
        // Return the function body
        return body;
  }
    /**
     * Generates the locals for the WebAssembly module.
     * @returns {string} The generated locals as a string.
     */
    generateLocals(){
      let body = "";
      for(let i = 0; i < this.locals.length; i++){
        let local = this.locals[i];
        // Add the local to the body
        body += "(local $" + local.name + " " + local.type + ")\n";
      }
      // Reset the locals and the local name counter
      this.locals = [];
      this.localNameCounter = 0;
      return body;
    }

    /**
     * Generates instructions for a given function.
     * 
     * @param {Array} instructions - The array of instructions.
     * @param {number} funcIndex - The index of the function.
     * @param {Array} stackState - The current state of the stack.
     * @param {Object} funcType - The type of the function.
     * @returns {Object} - An object containing the generated body and updated stack state.
     */
    generateInstructions(instructions, funcIndex, stackState, funcType){
      let body = '';
      let instructionCount = 0;
      this.isLastInstruction = false;
      // Generate instructions until the minimum number of instructions is reached or a return instruction is encountered
      while (instructionCount < this.min_number_of_instructions && !this.returnExit) {
        if(instructionCount > this.max_number_of_instructions || this.isLastInstruction){
          // Correct the stack state to match the function type and add the corresponding instructions to the body
          let correctedStackState = this.ensureCorrectStackState(stackState, instructions, funcType, funcIndex);
          body += correctedStackState.body;
          stackState = correctedStackState.stackState;
          return {
            body: body,
            stackState: stackState
          }
        }
        // Increment the instruction count
        instructionCount++;
        // Generate a single instruction based on the current stack state and function type
        let instructionGenerated = this.generateSingleInstruction(stackState, instructions, funcType, funcIndex);
        // Add the generated instruction to the body and update the stack state
        body += instructionGenerated.body;
        stackState = instructionGenerated.stackState;
        this.stack.setState(stackState);
      }
      // Generate instructions until the stack state matches the function results or a return instruction is encountered
      while (stackState.length !== funcType.results.length && !this.returnExit) {
        if(instructionCount > this.max_number_of_instructions || this.isLastInstruction){
          // Correct the stack state to match the function type and add the corresponding instructions to the body
          let correctedStackState = this.ensureCorrectStackState(stackState, instructions, funcType, funcIndex);
          body += correctedStackState.body;
          stackState = correctedStackState.stackState;
          return {
            body: body,
            stackState: stackState
          }
        }
        // Increment the instruction count
        instructionCount++;
        // Generate a single instruction based on the current stack state and function type
        let instructionGenerated = this.generateSingleInstruction(stackState, instructions, funcType, funcIndex);
        // Add the generated instruction to the body and update the stack state
        body += instructionGenerated.body;
        stackState = instructionGenerated.stackState;
        this.stack.setState(stackState);
      }
      // If a return instruction was encountered, it still generates correct intructions but they can be ignored because they are after the return
      if(this.returnExit){
        let correctedStackState = this.ensureCorrectStackState(stackState, instructions, funcType, funcIndex);
        body += ';;ignore the instructions after the return\n';
        body += correctedStackState.body;
        stackState = correctedStackState.stackState;
        return {
          body: body,
          stackState: stackState
        }
      }
      // Return the generated body and updated stack state
      return {
        body: body,
        stackState: stackState
      }
    }
    /**
     * Generates a single instruction based on the given stack state, instructions, function type, and function index.
     * @param {Array} stackState - The current stack state.
     * @param {Array} instructions - The available instructions.
     * @param {string} funcType - The type of the current function.
     * @param {number} funcIndex - The index of the current function.
     * @returns {Object} - An object containing the generated instruction's body and updated stack state.
     */
    generateSingleInstruction(stackState, instructions, funcType, funcIndex){
      // Gets the possible instructions based on the actual stackState
      let possibleInstructions = this.getPossibleInstructions(stackState, instructions);
      // Select a random instruction from the possible ones
      let selectedInstruction = possibleInstructions[this.getRandomInt(0, possibleInstructions.length - 1)];
      // Every method returns a body and a stackState
      switch(selectedInstruction.name){
        case "const":
          return this.handleConstInstruction(stackState, selectedInstruction);
        case "get":
          return this.handleGetInstruction(stackState, selectedInstruction, funcType);
        case "set":
          return this.handleSetInstruction(stackState, selectedInstruction, funcType);
        case "return":
          return this.handleReturnInstruction(stackState, selectedInstruction);
        case "if":
          return this.handleIfInstruction(stackState, selectedInstruction, funcType, funcIndex, instructions);
        case "loop":
          return this.handleLoopInstruction(stackState, selectedInstruction, funcType, funcIndex, instructions);
        case "call":
          return this.handleCallInstruction(stackState, selectedInstruction, funcIndex);
        case "call_indirect":
          return this.handleCallIndirectInstruction(stackState, selectedInstruction, funcIndex, instructions);
        // Add other instructions here...
        default:
          return this.handleOtherInstruction(stackState, selectedInstruction);
      }
    }
    /**
     * Applies probabilities to the given instructions and filters out instructions based on the probability values.
     * @param {Array<Object>} instructions - The array of instructions to apply probabilities to.
     * @returns {Array<Object>} - The filtered array of instructions.
     */
    applyProbabilities(instructions){
      // Generate a random number to use for probability checks
      let probability = Math.random();
      // Filter out the instructions based on the probability values
      if(probability > this.probability_of_call){
        instructions = instructions.filter(instr => instr.name !== "call");
      }
      if(probability > this.probability_of_call_indirect){
        instructions = instructions.filter(instr => instr.name !== "call_indirect");
      }
      if(probability > this.probability_of_if){
        instructions = instructions.filter(instr => instr.name !== "if");
      }
      if(probability > this.probability_of_loop){
        instructions = instructions.filter(instr => instr.name !== "loop");
      }
      // Return the updated list of instructions
      return instructions;
    }
    /**
     * Returns the possible instructions based on the current stack state and available instructions.
     *
     * @param {Array} stackState - The current state of the stack.
     * @param {Array} instructions - The available instructions.
     * @returns {Array} - The possible instructions.
     */
    getPossibleInstructions(stackState, instructions){
      let possibleInstructions;
      // If the stack is empty, the possible instructions are the ones that produce at least one element
      if (stackState.length === 0) {
        possibleInstructions = instructions.filter(instruction => instruction.produces > 0 && instruction.consumes === 0);
      } else {
        // Otherwise, the possible instructions are the ones that consume less or equal elements than the stack length
        possibleInstructions = instructions.filter(instruction => instruction.consumes <= stackState.length);
      }
      // Apply the probabilities to the possible instructions
      possibleInstructions = this.applyProbabilities(possibleInstructions);
      return possibleInstructions;
    }
    /**
     * Ensures the correct stack state by generating necessary instructions to fix it.
     * 
     * @param {Array} stackState - The current stack state.
     * @param {Array} instructions - The instructions to be executed.
     * @param {Object} funcType - The function type.
     * @param {number} funcIndex - The index of the function.
     * @returns {Object} - An object containing the generated instructions and the final stack state.
     */
    ensureCorrectStackState(stackState, instructions, funcType, funcIndex){
      let body = "";
      // Resetting 'returnExit' to false as the stack state is being fixed, indicating the end of the generation process.
      this.returnExit = false;
      // Keep fixing the stack state until it matches the expected result length
      while (stackState.length !== funcType.results.length) {
        // Call fixStackState to generate the necessary instructions to correct the stack state
        let fixed = this.fixStackState(stackState, instructions, funcType, funcIndex);
        body += fixed.body;
        stackState = fixed.stackState;
      }
      // Return the generated instructions and the final stack state
      return {
        body: body,
        stackState: stackState
      }
    }
    /**
     * Fixes the stack state by generating instructions to adjust the stack length.
     * @param {Array} stackState - The current stack state.
     * @param {Array} instructions - The available instructions.
     * @param {Object} funcType - The function type.
     * @param {number} funcIndex - The function index.
     * @returns {Object} - An object containing the generated instructions and the updated stack state.
     */
    fixStackState(stackState, instructions, funcType, funcIndex){
      let fixingInstructions = [];
      // If the stack state length is greater than the result length, we need to drop some values
      if(stackState.length > funcType.results.length){
        // Get the possible instructions and filter out the ones that drop values
        fixingInstructions = this.getPossibleInstructions(stackState, instructions).filter(instr => instr.name === "drop");
      } 
      // If the stack state length is less than the result length, we need to add some values
      else if(stackState.length < funcType.results.length){
        // Get the possible instructions and filter out the ones that add constant values
        fixingInstructions = this.getPossibleInstructions(stackState, instructions).filter(instr => instr.name === "const");
      }
      let body = "";
      // Generate a single instruction to fix the stack state
      // fixingInstructions conatin only one instruction drop or const
      let instructionGenerated = this.generateSingleInstruction(stackState, fixingInstructions, funcType, funcIndex);
      body += instructionGenerated.body;
      stackState = instructionGenerated.stackState;
      // Return the generated instructions and the updated stack state
      return {
        body: body,
        stackState: stackState
      }
    }
    /**
     * Handles the const instruction.
     *
     * @param {Array} stackState - The current state of the stack.
     * @param {string} instruction - The instruction to be handled.
     * @param {number|null} value - The value to be used for the const instruction. If null, a random number between 0 and 100 will be generated.
     * @returns {Object} - An object containing the updated body and stackState.
     */
    handleConstInstruction(stackState, instruction, value = null) {
      let body = "";
      let number;
      // If no value is provided, generate a random number between 0 and 100
      if(value === null){
        number = this.getRandomInt(0, 100);
      } else {
        // If a value is provided, use it
        number = value;
      }
      stackState = this.updateStackState(stackState, instruction);
      body += instruction.toString() + " " + number + "\n";
      // Return the updated body and stack state
      return {
        body: body,
        stackState: stackState
      };
    }
    /**
     * Handles the local.get instruction.
     * 
     * @param {StackState} stackState - The current stack state.
     * @param {Instruction} instruction - The instruction to handle.
     * @param {FuncType} funcType - The function type.
     * @returns {any} - The result of handling the instruction.
     */
    handleGetInstruction(stackState, instruction, funcType) {
      return this.handleLocalInstruction(stackState, instruction, funcType);
    }
    /**
     * Handles the set instruction.
     * 
     * @param {StackState} stackState - The current stack state.
     * @param {Instruction} instruction - The instruction to handle.
     * @param {FuncType} funcType - The function type.
     * @returns {StackState} The updated stack state.
     */
    handleSetInstruction(stackState, instruction, funcType) {
      return this.handleLocalInstruction(stackState, instruction, funcType);
    }
    /**
     * Adds a local variable to the generator.
     * @returns {Object} The newly added local variable.
     */
    addLocalVariable() {
      let local = {};
      // Assign a name to the local variable
      local.name = "local" + this.localNameCounter;
      // Assign a random type to the local variable from the allowed types
      local.type = this.allowed_types[this.getRandomInt(0, this.allowed_types.length - 1)];
      // Add the local variable to the list of locals
      this.locals.push(local);
      // Increment the local name counter
      this.localNameCounter++;
      // Return the local variable
      return local;
    }
    /**
     * Handles a local instruction.
     *
     * @param {Array} stackState - The current stack state.
     * @param {Object} instruction - The instruction to handle.
     * @param {Object} funcType - The function type.
     * @returns {Object} - The updated body and stack state.
     */
    handleLocalInstruction(stackState, instruction, funcType) {
      let body = "";
      let local;
      // If there are no parameters and no local variables, add a new local variable
      if(funcType.params.length <= 0 && this.locals.length <= 0){
        local = this.addLocalVariable();
        body += instruction.toString() + " $" + local.name + "\n";
      } else {
        // If there are parameters or local variables, select a random one
        let param_index = this.getRandomInt(0, funcType.params.length - 1);
        local = {name: param_index, type: funcType.params[param_index]};
        body += instruction.toString() + " " + local.name + "\n";
      }
      // Update the stack state with the instruction
      stackState = this.updateStackState(stackState, instruction);
      // Return the updated body and stack state
      return {
        body: body,
        stackState: stackState
      };
    }
    /**
     * Generates the call instruction and updates the stackState.
     * 
     * @param {Object} stackState - The current stack state.
     * @param {Object} callInstruction - The call instruction object.
     * @param {number} funcIndex - The index of the function to generate the call.
     * @returns {Object} - An object containing the generated body and updated stackState.
     */
    handleCallInstruction(stackState, callInstruction, funcIndex) {
      let body = "";
      // Update the stack state with the call instruction
      stackState = this.updateStackState(stackState, callInstruction);
      // Add a connection between the current function node and the called function node in the compiler's call graph
      this.compiler_cg.add([`node${funcIndex}`, `node${callInstruction.index}`]);
      // Add the call instruction to the body
      body += callInstruction.toString() + "\n";
      // Return the updated body and stack state
      return {
        body: body,
        stackState: stackState
      };
    }
    /**
     * Handles the call_indirect instruction.
     * Generates the call_indirect instruction, updates the stackState, and uses the index of the function to generate the call.
     *
     * @param {Object} stackState - The current state of the stack.
     * @param {Object} callIndirectInstruction - The call_indirect instruction object.
     * @param {number} funcIndex - The index of the function.
     * @param {Array} allInstructions - All the instructions.
     * @returns {Object} - An object containing the generated body and updated stackState.
     */
    handleCallIndirectInstruction(stackState, callIndirectInstruction, funcIndex, allInstructions) {
      let body = "";
      // Get the index and type of the instance from the call indirect instruction
      let index = callIndirectInstruction.getIstance().index;
      let type = callIndirectInstruction.getIstance().type;
      // Create a const instruction with the index of the function to be called to load into the stack
      let result = this.handleConstInstruction(stackState, allInstructions.filter((instr) => instr.name === `const`)[0], index);
      // Add the result body to the body and update the stack state
      body += result.body;
      stackState = result.stackState;
      // Add the call indirect instruction to the body with its type
      body += callIndirectInstruction.toString().concat(" (type " + type + ")\n");
      // Update the stack state with the call indirect instruction
      stackState = this.updateStackState(stackState, callIndirectInstruction);
      // Add a connection between the current function node and the called function node in the compiler's call graph
      this.compiler_cg.add([`node${funcIndex}`, `node${index}`]);
      // Return the updated body and stack state
      return {
        body: body,
        stackState: stackState
      };
    }
    /**
     * Handles other instructions, the linear ones, in the WebAssembly generator.
     * 
     * @param {Object} stackState - The current state of the stack.
     * @param {Instruction} instruction - The instruction to be handled.
     * @returns {Object} - An object containing the updated body and stack state.
     */
    handleOtherInstruction(stackState, instruction) {
      let body = "";
      // Update the stack state with the instruction
      stackState = this.updateStackState(stackState, instruction);
      // Add the instruction to the body
      body += instruction.toString() + "\n";
      // Return the updated body and stack state
      return {
        body: body,
        stackState: stackState
      };
    }
    /**
     * Generates the if instruction, with the then and else bodies, and updates the stackState.
     *
     * @param {Array} stackState - The current stack state.
     * @param {Object} instruction - The if instruction object.
     * @param {Object} funcType - The function type object.
     * @param {number} funcIndex - The index of the function.
     * @param {Array} instructions - The array of instructions.
     * @returns {Object} - An object containing the generated if instruction body and the updated stackState.
     */
    handleIfInstruction( stackState, instruction, funcType, funcIndex, instructions ) {
      let body = "(if ";
      // Update the stack state with the if instruction taht consumes one value
      stackState = this.updateStackState(stackState, instruction);
      // Create new stack states for the then and else branches
      let thenStackState = new Stack().getState();
      let elseStackState = new Stack().getState();
      // Determine the actual number of results of the if instruction
      let actual_number_of_results;
      if (stackState.length === funcType.results.length) {
        // If this is the last instruction, the number of results should match the function's results
        this.isLastInstruction = true;
        actual_number_of_results = funcType.results.length;
      } else {
        // If this is not the last instruction, the number of results can be random
        actual_number_of_results = this.getRandomInt(0, this.max_results_for_if);
      }
      // Generate the results of the if instruction
      let results = [];
      if (actual_number_of_results !== 0) {
        for (let i = 0; i < actual_number_of_results; i++) {
          results.push(this.allowed_types[this.getRandomInt(0, this.allowed_types.length - 1)]);
        }
        // Add the results to the if body
        body += "(result ";
        results.forEach(element => {
          body += element + " ";
        });
        body += ")\n";
      } else {
        body += "\n";
      }
      // Create a mock function type with the same parameters but with the new number of results
      let mock_funcType = { params: funcType.params, results: results };

      // Generate the bodies for the then and else branches
      let thenBody = "";
      let elseBody = "";
      // Increase the nested if counter
      this.nestedIfCounter++;
      // Checks if the max number of nested ifs has been reached, if so, remove the if instruction from the instructions
      if (this.nestedIfCounter > this.maxNestedIfs){
        // Remove the if instruction from the instructions by setting its consumes to -1 so it can't be used
        let ifInstruction = instructions.filter(instr => instr.name == "if")[0];
        ifInstruction.consumes = 1000;
      }
      // Generate the then and else bodies and update the stack states and the bodies
      let thenResult = this.generateInstructions(instructions, funcIndex, thenStackState, mock_funcType);
      let elseResult = this.generateInstructions(instructions, funcIndex, elseStackState, mock_funcType);
      thenBody += thenResult.body;
      elseBody += elseResult.body;
      thenStackState = thenResult.stackState;
      elseStackState = elseResult.stackState;
      // Update the stack state with the then stack state (the else branch has the same number of results as the then branch)
      thenStackState.forEach(element => {
        stackState.push(element);
      });
      // Append the then and else bodies to the if body
      body += "(then\n" + thenBody + ")\n";
      body += "(else\n" + elseBody + ")\n";
      // Close the if body
      body += ")\n";
      // Make the if instruction consume one value so it can be used again
      let ifInstruction = instructions.filter(instr => instr.name == "if")[0];
      ifInstruction.consumes = 1;
      // Return the updated body and stack state
      return {
        body: body,
        stackState: stackState
      };
    }
    /**
     * Handles the loop instruction.
     *
     * @param {Stack} stackState - The current state of the stack.
     * @param {string} instruction - The loop instruction.
     * @param {object} funcType - The function type.
     * @param {number} funcIndex - The index of the function.
     * @param {Array} instructions - The array of instructions.
     * @returns {object} - The generated loop body and the updated stack state.
     */
    handleLoopInstruction( stackState, instruction, funcType, funcIndex, instructions) {
      // Initialize a local variable counter
      let local = {};
      local.name = "loopCounter"+this.nestedLoopCounter;
      local.type = "i32";
      this.locals.push(local);
      this.localNameCounter++;
      // Initialize the local variable counter at 0
      let body = "(local.set $" + local.name + " (i32.const 0))\n";
      // Create a new stack state for the loop
      let loopStackState = new Stack().getState();
      // Generate a mock function type with the same parameters but with the no results
      // Because the stack state after the loop sbould be the same as the stack state before the loop
      let results = [];
      let mock_funcType = {params: funcType.params, results: results};
      // Generate the loop instruction
      let loop_name = this.nestedLoopCounter;
      body = "(loop $loop" + loop_name + "\n";
      this.nestedLoopCounter++;
      // Limit the number of nested loops
      if(this.nestedLoopCounter > this.maxNestedLoops){
        // Remove the loop instruction from the instructions by setting its consumes to -1 so it can't be used
        let loopInstruction = instructions.filter(instr => instr.name == "loop")[0];
        loopInstruction.consumes = 10000;
      }
      // Generate the loop body
      let loopResult = this.generateInstructions(instructions, funcIndex, loopStackState, mock_funcType);
      body += loopResult.body;
      // Generate the loop counter increment and loop condition
      let number_of_loops = this.getRandomInt(1,this.max_number_of_loop_instructions);
      body += `local.get $${local.name}\ni32.const 1\ni32.add\nlocal.set $${local.name}\n`;
      body += "local.get $" + local.name + "\n";
      body += "i32.const " + number_of_loops + "\n";
      body += "i32.lt_s\n";
      body += "br_if $loop"+ loop_name+"\n";
      // Close the loop body
      body += ")\n";
      // Make the loop instruction consume no value so it can be used again
      let loopInstruction = instructions.filter(instr => instr.name == "loop")[0];
      loopInstruction.consumes = 0;
      // Return the updated body and stack state
      return {
        body: body,
        stackState: stackState
      };
    }
    /**
     * Handles the return instruction and updates the stack state.
     * 
     * @param {Object} stackState - The current stack state.
     * @param {Instruction} returnInstruction - The return instruction to be generated.
     * @returns {Object} - An object containing the generated body and updated stack state.
     */
    handleReturnInstruction(stackState, returnInstruction) {
      let body = "";
      // Update the stack state and body with the return instruction
      stackState = this.updateStackState(stackState, returnInstruction);
      body += returnInstruction.toString() + "\n";
      // Set the return exit flag to true
      this.returnExit = true;
      // Return the updated body and stack state
      return {
        body: body,
        stackState: stackState
      };
    }
    /**
     * Updates the stack state based on the given instruction.
     * @param {Array} stackState - The current stack state.
     * @param {Object} instruction - The instruction object.
     * @returns {Array} - The updated stack state.
     */
    updateStackState(stackState, instruction) {
      //Remove the value consumed by the call_indirect from the stack
      if (instruction.name === 'call_indirect') {//si può togliere facendo +1 ai consumes quando aggiungo le call_indirect all'inizio
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
    /**
     * Generates a random integer between the specified minimum and maximum values.
     * @param {number} min - The minimum value.
     * @param {number} max - The maximum value.
     * @returns {number} The random integer.
     */
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