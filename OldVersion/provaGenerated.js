const fs = require("fs");
const os = require("os");
const GraphManager = require("./GraphManager");
const { IfInstruction } = require("./Instructions/ControlFlowInstruction");
const { ArithmeticInstruction, BitWiseInstruction } = require("./Instructions/LinearInstructions");
//TODO: spostare call nelle classi, se tocca farlo
//TODO quando abbiamo voglia: cambiare nome alle variabili
//TODO: capire i dataset e altre domande per il prof.
/**
 * Represents a FuncGenerator object.
 * @constructor
 */
class FuncGenerator {
  constructor() {
    //CallGraph utility 
    this.compiler_cg = new Set();
    this.graphManager = new GraphManager();
    
    // Initialize the WebAssembly module
    this.module = [];
    this.stack = [];
    this.functions = [];
    this.functionTypes = [];
    this.funcTypesIndex = {};

    //Function settings
    this.allowed_types = ["i32"];
    //For now only i32 is supported
    //this.allowed_types = ["i32", "i64", "f32", "f64"];
    this.maxNumOfFunctions = 5;
    this.maxNumOfParams = 4;
    this.maxNumOfResults = 2;
    this.maxNumOfFunctionTypes = this.allowed_types.length * (this.maxNumOfParams + this.maxNumOfResults);

    //Chances to modify the abstr of code
    this.probabilityOfControlFlow = 0.8;
    this.probabilityOfIf = 0.8;
    this.probabilityOfCallIndirect = 0.6;
    this.probabilityOfOperation = 0.9;
    this.probabilityOfArithmeticOperation = 0.5;
  }
  
  
  /**
   * Resets the state of the object.
   */
  reset() {
    this.graphManager.reset();
    this.compiler_cg = new Set();
    this.module = [];
    this.stack = [];
    this.functions = [];
    this.functionTypes = [];
    this.funcTypesIndex = {};
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

  /**
   * Generates a WebAssembly module and writes it to a file.
   * @param {string} wat_name - The name of the WebAssembly Text (wat) file to be generated.
   */
  generateModule(wat_name) {
    this.reset();
    this.module.push("(module");

    while (this.functionTypes.length < this.maxNumOfFunctionTypes) {
      let type = this.generateFunctionType();
      if (!this.functionTypes.some((e) => e === type[0])) {
        this.functions.push(type);
        this.functionTypes.push(type[0]);
      }
    }
    this.functionTypes.forEach((type) => {
      this.module.push(type);
    });
    for (let i = 0; i < this.maxNumOfFunctions; i++) {
      this.funcTypesIndex[i] =
        Math.floor(Math.random() * (this.functionTypes.length - 1)) + 1;
    }
    this.module.push(`(table ${this.maxNumOfFunctions} funcref)`);
    this.module.push(this.generateFunctionTable());
    //export a random function from the module
    let export_id = this.getRandomInt(0, this.maxNumOfFunctions - 1);
    this.module.push(`(export "start" (func ${export_id}))`);

    for (let i = 0; i < this.maxNumOfFunctions; i++) {
      this.createNode(i, export_id);
      this.generateFunctionBody(i);
    }

    this.module.push(")");
    //Aggiungere possibilità di stampare solo il wat, solo il dot, o entrambi
    const result = this.module.join(os.EOL);
    fs.writeFileSync(`./output_files/${wat_name}.wat`, result);
    this.generateDotData(wat_name);
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
   * Generates a random integer between the specified minimum and maximum values.
   * @param {number} min - The minimum value.
   * @param {number} max - The maximum value.
   * @returns {number} - The random integer.
   */
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  /**
   * Generates a function type with random parameters and results.
   * 
   * @returns {Array} An array containing the function type, parameters, and results.
   */
  generateFunctionType() {
    let params = [];
    let results = [];
    let n_params = Math.floor(Math.random() * this.maxNumOfParams) + 1;
    let n_results = Math.floor(Math.random() * this.maxNumOfResults) + 1;

    for (let i = 0; i < n_params; i++) {
      params.push(
        this.allowed_types[
          Math.floor(Math.random() * this.allowed_types.length)
        ]
      );
    }
    if (this.maxNumOfResults !== 0)
      for (let i = 0; i < n_results; i++) {
        results.push(
          this.allowed_types[
            Math.floor(Math.random() * this.allowed_types.length)
          ]
        );
      }
    return [
      `(type (func (param ${params.join(" ")})${
        results.length ? " (result " + results.join(" ") + ")" : ""
      }))`,
      params,
      results,
    ];
  }
  
  /**
   * Generates the function table.
   * @returns {string} The generated function table.
   */
  generateFunctionTable() {
    let elem = "(elem (i32.const 0)";
    for (let i = 0; i < this.maxNumOfFunctions; i++) {
      elem += ` ${i}`;
    }
    elem += ")";
    return elem;
  }

  /**
   * Generates the body of a function.
   * 
   * @param {number} function_id - The ID of the function.
   */
  generateFunctionBody(function_id) {
    const function_type = this.funcTypesIndex[function_id];

    this.module.push(
      `(func $${function_id} (type ${function_type}) (param ${this.functions[
        function_type
      ][1].join(" ")}) (result ${this.functions[function_type][2].join(" ")})`
    );

    let funcType = this.functionTypes[this.funcTypesIndex[function_id]];
    let func = this.functions[function_type];

    this.generateInstruction(func, function_id);
    this.module.push(")");
  }

  /**
   * Generates an instruction based on the given function type and function ID.
   * @param {string} funcType - The type of the function.
   * @param {number} function_id - The ID of the function.
   */
  generateInstruction(funcType, function_id) {
    let probability = Math.random();
    if (probability < this.probabilityOfControlFlow) {
      this.generateControlFlowInstruction(funcType, function_id); //if, loop, ecc
    } else {
      //Do a call or call_indirect
      this.generateCallInstruction(funcType, function_id); //call, call_indirect
    }
  }

  /**
   * Generates a control flow instruction based on the given function type and function ID.
   * @param {string} funcType - The type of the function.
   * @param {number} function_id - The ID of the function.
   */
  generateControlFlowInstruction(funcType, function_id) {
    let instruction;
    let probability = Math.random();

    if (probability < this.probabilityOfIf) {
      instruction = new IfInstruction(this.module, this.stack, funcType, this);
    } else {
      // Add more types of control flow instructions
    }

    if (instruction) {
      instruction.executeInstruction(funcType, function_id);
    } else {
      this.generateCallInstruction(funcType, function_id);
    }
  }

  //Do the call, call or call_indirect based on the probability of probabilityOfCallIndirect
  generateCallInstruction(func, function_id) {
    let func_caller = func;
    let calleeIndex = this.getRandomInt(0, this.maxNumOfFunctions - 1);
    let calleeTypeIndex = this.funcTypesIndex[calleeIndex];
    let calleeType = this.functions[calleeTypeIndex];
    this.compiler_cg.add([`node${function_id}`, `node${calleeIndex}`]);
    let probability = Math.random();

    this.addLocalElementsToStack(func_caller[1], calleeType[1]);
    //To use all the types, use this method instead of the one above,
    //but it loads the stack with const values 
    //this.addConstElementsToStack(calleeType[1]);
    if (probability < this.probabilityOfCallIndirect) {
      this.module.push(`i32.const ${calleeIndex}`);
      this.module.push(`call_indirect (type ${calleeTypeIndex})`);
      this.stack.pop();
    } else {
      this.module.push(`call ${calleeIndex}`);
    }

    this.dropElementsFromStack(calleeType, func_caller);
  }

  addLocalElementsToStack(func_caller, calleeParams) {
    for (let i = 0; i < func_caller.length; i++) {
      let type = func_caller[i];
      this.stack.push(`local.get ${i}`);
      this.module.push(`local.get ${i}`);
    }

    if (calleeParams.length > func_caller.length) {
      for (let i = 0; i < calleeParams.length - func_caller.length; i++) {
        this.stack.push(`i32.const ${this.getRandomInt(1, 100)}`);
        this.module.push(`i32.const ${this.getRandomInt(1, 100)}`);
      }
    } else if (calleeParams.length !== func_caller.length) {
      for (let i = 0; i < func_caller.length - calleeParams.length; i++) {
        if (Math.random() < this.probabilityOfOperation) {
          let operation;
          if (func_caller.length >= 2) {
            let ran = Math.random();
            //Add a probability var for every specific type of operations
            if (ran < this.probabilityOfArithmeticOperation) {
             operation = new ArithmeticInstruction(this.module,this.stack,func_caller[i]); 
            } else {
              operation = new BitWiseInstruction(this.module,this.stack,func_caller[i]);
            }
            
          } else if (func_caller.length === 1) {
            //Add operations with one parameter
          } else {
            //Add operations with no parameters
          }

          operation.executeInstruction();
        } else {
          this.stack.pop();
          this.module.push("drop");
        }
      }
    }
  }

  /**
   * Generates const values and appends them to the stack and module
   * @param {number} params number of params to append 
   * @deprecated
   */
  addConstElementsToStack(params) {
    for (let i = 0; i < params.length; i++) {
      let type = params[i];
      this.stack.push(`${type}.const ${this.getRandomInt(1,100)}`);
      this.module.push(`${type}.const ${this.getRandomInt(1, 100)}`);
    }
  }

  dropElementsFromStack(calleeType, func_caller) {
    if (calleeType[2].length > func_caller[2].length) {
      for (let i = 0; i < calleeType[2].length - func_caller[2].length; i++) {
        this.stack.pop();
        this.module.push("drop ");
      }
    }
    let lastUnequalIndex = -1;

    for (let i = 0; i < func_caller[2].length; i++) {
      if (calleeType[2][i] !== func_caller[2][i]) {
        lastUnequalIndex = i;
        break;
      }
    }

    if (lastUnequalIndex !== -1) {
      let numElementsToPop =
        Math.min(calleeType[2].length, func_caller[2].length) -
        lastUnequalIndex;
      for (let i = 0; i < numElementsToPop; i++) {
        this.stack.pop();
        this.module.push("drop ");
      }
      for (let i = lastUnequalIndex; i < func_caller[2].length; i++) {
        this.stack.push(`${func_caller[2][i]}.const ${this.getRandomInt(1, 100)}`);
        this.module.push(`${func_caller[2][i]}.const ${this.getRandomInt(1, 100)}`);
      }
    }
  }
}

module.exports = FuncGenerator;