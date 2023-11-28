const fs = require("fs");
const os = require("os");
const GraphManager = require("./GraphManager");

//TODO: dividere in più file
//TODO: spostare call nelle classi, se tocca farlo
//TODO: aggiungere commenti sui metodi più importanti
//TODO: cambiare nome alle variabili
//TODO: Creare i file .wat numerati, all'interno di una cartella a parte (tipo la Demos)
//TODO: capire i dataset e altre domande per il prof.
class funcGenerator {
  constructor() {
    this.compiler_cg = new Set();
    this.graphManager = new GraphManager();
    this.allowed_types = ["i32"];
    this.module = [];
    //
    this.maxNumOfFunctions = 150;
    this.maxNumOfParams = 4;
    this.maxNumOfResults = 2;
    this.maxNumOfFunctionTypes =
    this.allowed_types.length * (this.maxNumOfParams + this.maxNumOfResults);
    
    this.probabilityOfControlFlow = 0.5;
    this.probabilityOfIf = 0.6;
    this.probabilityOfCallIndirect = 0.5;
    this.probabilityOfOperation = 0.5;
    this.stack = [];
    this.functions = [];
    this.functionTypes = [];
    this.funcTypesIndex = {};
  }
  reset() {
    this.compiler_cg = new Set();
    this.module = [];
    this.stack = [];
    this.functions = [];
    this.functionTypes = [];
    this.funcTypesIndex = {};
  }
  /**
   *
   * i32 i32 i32 i32
   * i32 i32 i32
   * i32 i32
   * i32
   * 
   * 2^maxNumOfParams+maxNumOfResults+allowed_types.length
   *
   * maxNumOfTypes = this.maxNumOfParams*(allowed_types.length+maxNumOfResults)
    
   * i32 i32 i32 i32 res i32
   * i32 i32 i32 res i32
   * i32 i32 res i32
   * i32 res i32
   *

   */
  //Done

  generateDotData() {
    this.compiler_cg.forEach((pair) => {
      const [sourceNode, targetNode] = pair;
      this.graphManager.addEdge(sourceNode, targetNode);
    });
    let dotGraph = this.graphManager.generateDotData("dotfile");
    fs.writeFileSync("callgraph.dot", dotGraph);
  }

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
      if (i === export_id) {
        this.graphManager.addNode(
          `node${i}`,
          `[label="node${i}" style = "filled" color="gray"] `
        );
      } else {
        this.graphManager.addNode(
          `node${i}`,
          `[label="node${i}"]; `
        );
      }

      this.generateFunctionBody(i);
    }

    this.module.push(")");
    const result = this.module.join(os.EOL);
    fs.writeFileSync(`${wat_name}.wat`, result);
    this.generateDotData();
  }
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  //Done
  generateFunctionType() {
    let types = [];
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
  //Done
  generateFunctionTable() {
    let elem = "(elem (i32.const 0)";
    for (let i = 0; i < this.maxNumOfFunctions; i++) {
      elem += ` ${i}`;
    }
    elem += ")";
    return elem;
  }

  generateFunctionBody(function_id) {
    //let functions_index = [id,type],[id,type],[id,type];
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

  generateInstruction(funcType, function_id) {
    let probability = Math.random();
    if (probability < this.probabilityOfControlFlow) {
      this.generateControlFlowInstruction(funcType, function_id); //if, loop, ecc
    } else {
      //To do:add arithmetic, bitwise, ecc

      this.generateCallInstruction(funcType, function_id); //call, call_indirect
    }
  }
  generateCallInstruction(funcType, function_id) {
    //Do the call, call or call_indirect based on the probability of probabilityOfCallIndirect
    this.generateCallee(funcType, function_id);
  }
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

  generateCallee(func, function_id) {
    let func_caller = func;
    let calleeIndex = this.getRandomInt(0, this.maxNumOfFunctions - 1);
    let calleeTypeIndex = this.funcTypesIndex[calleeIndex];
    let calleeType = this.functions[calleeTypeIndex];
    this.compiler_cg.add([`node${function_id}`, `node${calleeIndex}`]);
    let probability = Math.random();
    console.log(func);

    let stackBefore = this.stack.length;
    //local
    //console.log("Func_caller: ", func_caller);
    //console.log("Callee: ", calleeType)
    this.addLocalElementsToStack(func_caller[1], calleeType[1]);
    //const
    //this.addConstElementsToStack(calleeType[1]);

    if (probability < this.probabilityOfCallIndirect) {
      //this.stack.push(`i32.const ${calleeTypeIndex}`);
      this.module.push(`i32.const ${calleeIndex}`);
      this.module.push(`call_indirect (type ${calleeTypeIndex})`);
      this.stack.pop();
    } else {
      this.module.push(`call ${calleeIndex}`);
    }

    this.dropElementsFromStack(calleeType, func_caller);
  }

  //[i32, i32, i32] chiamo-> [i32,i32]
  addLocalElementsToStack(func_caller, calleeParams) {
    for (let i = 0; i < func_caller.length; i++) {
      let type = func_caller[i];
      this.stack.push(`local.get ${i}`);
      this.module.push(`local.get ${i}`);
    }
    //console.log("func_caller: ", func_caller.length);
    //console.log("caleeParams: ",calleeParams.length)
    if (calleeParams.length > func_caller.length) {
      for (let i = 0; i < calleeParams.length - func_caller.length; i++) {
        // aggiungi operatore tra add-div-etc... random

        this.stack.push(`i32.const ${this.getRandomInt(1, 100)}`);
        this.module.push(`i32.const ${this.getRandomInt(1, 100)}`);
      }
    } else if (calleeParams.length !== func_caller.length) {
      for (let i = 0; i < func_caller.length - calleeParams.length; i++) {
        if (Math.random() < this.probabilityOfOperation) {
          //ToDo: cambiare le operazioni con gli oggetti operazione random
          //in base al numero di parametri
          let operation;
          if (func_caller.length >= 2) {
            //todo:add bitwise operations random
            console.log("Func Caller: ", func_caller[i]);
            operation = new ArithmeticInstruction(
              this.module,
              this.stack,
              func_caller[i]
            );
          } else if (func_caller.length === 1) {
            //add operations with one parameter
          } else {
            //add operations with no parameters
          }

          operation.executeInstruction();
        } else {
          this.stack.pop();
          this.module.push("drop");
        }
      }
    }

    /*
    for (let i = 0; i < params.length; i++) {
    if (locals > calleeParams.length) {
        if (Math.random() < this.probabilityOfOperationn) {
         // aggiungi operatore tra add-div-etc... random
         if(locals === 2) this.module.push(`${params[i]}.add`);
        } else {
            this.stack.pop();
            this.module.push("drop");
        }
       // this.module.push(`${params[i]}.const 0`);
      } else {
        this.stack.push(`${params[i]}.const 0`);
        this.module.push(`${params[i]}.const 0`);
          }
    }
    */
  }
  addConstElementsToStack(params) {
    for (let i = 0; i < params.length; i++) {
      let type = params[i];
      this.stack.push(`${type}.const 0`);
      this.module.push(`${type}.const 0`);
    }
  }

  dropElementsFromStack(calleeType, func_caller) {
    //need to transform calleeType[2] equals to func_caller[2] by dropping and adding elements to the stack
    //first check if the types are the same and the same number of elements
    //if [i32,i32,i64] but [i32,i64] i need to drop the first element of the stack and two add i32.const 0
    //so i have the same number and types of elements

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
        this.stack.push(`${func_caller[2][i]}.const 0`);
        this.module.push(`${func_caller[2][i]}.const 0`);
      }
    }
  }
}

class Instruction {
  constructor(module, stack) {
    this.module = module;
    this.stack = stack;
  }
  executeInstruction() {
    throw new Error("Method 'executeInstruction()' must be implemented.");
  }
}

class LinearInstruction extends Instruction {
  constructor(module, stack){
    super(module, stack);
  }
  executeInstruction() {
    throw new Error("Method 'executeInstruction()' must be implemented.");
  }
}

class ArithmeticInstruction extends LinearInstruction {
  constructor(module, stack, type) {
    super(module, stack);
    let operations = ["add", "sub", "mul", "div"];
    this.operation = operations[this.getRandomInt(0, operations.length - 1)];
    this.type = type;
  }
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  executeInstruction() {
    switch (this.operation) {
      case "add":
        this.stack.push(this.stack.pop() + " + " + this.stack.pop());
        this.module.push(`${this.type}.add`);
        break;
      case "sub":
        this.module.push(`${this.type}.sub`);
        break;
      case "mul":
        this.module.push(`${this.type}.mul`);
        break;
      case "div":
        this.module.push(`${this.type}.div_u`);
        break;
      // Add more operations
    }
  }
}
class BitwiseInstruction extends LinearInstruction {
  constructor(module, stack, operation, type) {
    super(module, stack);
    this.operation = operation;
    this.type = type;
  }

  executeInstruction() {
    switch (this.operation) {
      case "and":
        this.module.push(`${this.type}.and`);
        break;
      case "or":
        this.module.push(`${this.type}.or`);
        break;
      case "xor":
        this.module.push(`${this.type}.xor`);
        break;
      case "shl":
        this.module.push(`${this.type}.shl`);
        break;
      // Add more bitwise operations
    }
  }
}

class ControlFlowInstruction extends Instruction {
  constructor(module, stack, functionTypes) {
    super();
    this.module = module;
    this.stack = stack;
    this.functionTypes = functionTypes;
  }

  executeInstruction(funcType) {
    
    throw new Error("Method 'executeInstruction()' must be implemented.");
  }
}

class CallInstruction extends ControlFlowInstruction {
}
class CallIndirectInstruction extends ControlFlowInstruction {
}

class IfInstruction extends ControlFlowInstruction {
  constructor(module, stack, functionTypes, funcGenerator) {
    super(module, stack, functionTypes);
    this.funcGenerator = funcGenerator;
  }

  executeInstruction(funcType, function_id) {

    let randomNum = Math.floor(Math.random() * 2);
    //this.stack.push(`i32.const ${randomNum}`);
    this.module.push(`i32.const ${randomNum}`);
    this.module.push(`(if (result ${funcType[2].join(" ")})`);
    //this.stack.pop(); //pop the value of the if
    this.module.push("(then");
    this.funcGenerator.generateCallee(funcType, function_id);
    //this.funcGenerator.generateCallInstruction(funcType);
    this.module.push(")");
    this.module.push("(else");
    this.funcGenerator.generateCallee(funcType, function_id);
    //this.funcGenerator.generateCallInstruction(funcType);
    this.module.push(")");
    this.module.push(")");
  }
}

let instance = new funcGenerator();
instance.generateModule("prova");

/*
  (func $2 (type 2) (param i64 f64 f64) (result f32)
  local.get 0
  f32.convert_i64
  local.get 1
  local.get 2
  i32.convert_f64
  f64.convert_i32
  f64.add
    call_indirect (type 1) -> (f32,f64,i32) (result i32)
    f32.convert_i32_s
  )
*/