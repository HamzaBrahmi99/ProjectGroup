const fs = require("fs");
const os = require("os");

class funcGenerator {
  constructor() {
    this.allowed_types = ["i32", "i64", "f32", "f64"];
    this.module = [];
    this.maxNumOfFunctions = 5;
    this.maxNumOfFunctionTypes = 5;
    this.maxNumOfParams = 4;
    this.maxNumOfResults = 0;
    this.probabilityOfControlFlow = 0.5;
    this.probabilityOfIf = 0.6;
    this.probabilityOfCallIndirect = 0.5;
    this.stack = [];
    this.functions = [];
    this.functionTypes = [];
    this.funcTypesIndex = [];
  }
  reset() {
    this.module = [];
    this.stack = [];
    this.functions = [];
    this.functionTypes = [];
    this.funcTypesIndex = [];
  }
  //Done
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
    this.module.push('(export "main" (func 0))');

    for (let i = 0; i < this.maxNumOfFunctions; i++) {
      this.generateFunctionBody(i);
    }
      this.module.push(")");
      const result = this.module.join(os.EOL);
      fs.writeFileSync(`${wat_name}.wat`, result);
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
    const function_type = this.funcTypesIndex[function_id];
    this.module.push(
      `(func $${function_id} (type ${function_type}) (param ${this.functions[
        function_type
      ][1].join(" ")}) (result ${this.functions[function_type][2].join(" ")})`
    );
    let funcType = this.functionTypes[this.funcTypesIndex[function_id]];
    let func = this.functions[function_type];
    this.generateInstruction(func);
    this.module.push(")");
  }
  generateInstruction(funcType) {
    let probability = Math.random();
    if (probability < this.probabilityOfControlFlow) {
      this.generateControlFlowInstruction(funcType);//if, loop, ecc
    } else {
      this.generateLinearInstruction(funcType);//arithmetic, bitwise, ecc
    }
  }
  generateLinearInstruction(funcType) {
    //faccio in caso le operazioni prima di chiamare la funzione
    /*
        * 1. Prendo le variabili dallo stack
        * 2. Controllo le operazioni possibili con quei tipi
        * 3. Genero il DataSet per quella variabile
        * params[i32,i64,i64] 
        * local.get 0
        * local.get 1 
        * local.get 2
        * i64.add
        * call i params[i32,i64]
        * 
        * params[i32,i64] 
        * local.get 0
        * local.get 1 
        * const
        * call i params[i32,i64,i32]
        * 
        * L'ultima volta che ci siamo visti ci hai detto di creare una classe che gestisca lo stack e che crei un oggetto che contenga l'insieme delle operazioni possibili sullo stack attuale, con alla fine il tipo di funzione,
        * Ascoltando alcuni audio che ci siamo salvati, in uno dei nostri primi incontri ci hai detto di utilizzare, però, solo i32 per semplicità e perché per l'applicazione che ha il progetto non ce n'è bisogno.
        * A questo punto, il che utilità avrebbe il dataset? avrebbe solo e unicamente tutte le operazioni applicabili a un i32.
        * 
        * params[i32,i64,i64] [i32,i64,i64]
        * local.get 0
        * local.get 1 
        * local.get 2
        * -------
        * converto in i32
        * i32.const 
        * i64.add
        * call i params[i32,i64,i32]
        * 
        * 
        * params[i32,i64,i64] 
        * local.get 0
        * 
        * local.get 1 
        * local.get 2
        * converto in i32
        * i32.const 
        * i64.add
        * call i params[i64,i64,i32,i32]
        * 
        * 
        * 
        * params[f32,f64]
        * --> verranno convertiti in i32
        * local.get n -> verrà convertito 
        * call i params[i32]
        * Dataset = [div, mul, add, sub, and, type 4 params (i32,i64,f64,f32) result (i32)]
    */
    this.generateCallee(funcType);
  }
  generateControlFlowInstruction(funcType) {
    let instruction;
    let probability = Math.random();

    if (probability < this.probabilityOfIf) {
      instruction = new IfInstruction(this.module, this.stack, funcType, this);
    } else {
      // Add more types of control flow instructions
    }

    if (instruction) {
      instruction.generateInstruction(funcType);
    } else {
      this.generateLinearInstruction(funcType);
    }
  }

  generateCallee(func) {
    let func_caller = func;
    let calleeIndex = Math.floor(Math.random() * this.functionTypes.length);
    let calleeTypeIndex = this.funcTypesIndex[calleeIndex];
    let calleeType = this.functions[calleeTypeIndex];

    let probability = Math.random();

    let stackBefore = this.stack.length;
    //local
    //this.addLocalElementsToStack(func_caller[1],calleeType[1]);
    //const
    this.addConstElementsToStack(calleeType[1]);

    if (probability < this.probabilityOfCallIndirect) {
      this.stack.push(`i32.const ${calleeTypeIndex}`);
      this.module.push(`i32.const ${calleeTypeIndex}`);
      this.module.push(`call_indirect (type ${calleeTypeIndex})`);
      this.stack.pop();
    } else {
      this.module.push(`call ${calleeIndex}`);
    }

    this.dropElementsFromStack(calleeType, func_caller);
  }
    //params[i32,i64,i64] calleeParams[i32,i64,i64]
    /*
    []
    []
    [params(i32, i64) result i32]
    

    
    call 4
    local.get 0 

    */
  addLocalElementsToStack(params, calleeParams) {
    for (let i = 0; i < params.length; i++) {
        let type = params[i];
        this.stack.push(`local.get ${i}`);
        this.module.push(`local.get ${i}`);
        if (params.length === calleeParams.length && params[i] !== calleeParams[i]) {
            this.module.push(`${calleeParams[i]}.convert_${params[i]}_s`)    
        }

        if (params.length > calleeParams.length && i === calleeParams.length) {
            if (params[i] === params[i - 1]) {
                this.module.push(this.generateLinearInstruction(params[i]));
            }
            this.module.push("drop") // operazione?
        }
    }
  }
  addConstElementsToStack(params) {
    for (let i = 0; i < params.length; i++) {
      let type = params[i];
      console.log(i);
      this.stack.push(`${type}.const} 0`);
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
  constructor(type) {
    this.type = type;
  }
  generateInstruction() {
    throw new Error("Method 'generateInstruction()' must be implemented.");
  }
}

class LinearInstruction extends Instruction {
  constructor(type, operation) {
    super(type);
    this.operation = operation;
  }
  generateInstruction() {
    throw new Error("Method 'generateInstruction()' must be implemented.");
  }
}

class ArithmeticInstruction extends LinearInstruction {
  constructor(module, stack, operation, type) {
    super(module, stack);
    this.operation = operation;
    this.type = type;
  }

  generateInstruction() {
    switch (this.operation) {
      case "add":
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

  generateInstruction() {
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

  generateInstruction(funcType) {
    
    throw new Error("Method 'generateInstruction()' must be implemented.");
  }
}

class IfInstruction extends ControlFlowInstruction {
  constructor(module, stack, functionTypes, funcGenerator) {
    super(module, stack, functionTypes);
    this.funcGenerator = funcGenerator;
  }

  generateInstruction(funcType) {
    let randomNum = Math.floor(Math.random() * 2);
    this.stack.push(`i32.const ${randomNum}`);
    this.module.push(`i32.const ${randomNum}`);
    this.module.push(`(if (result ${funcType[2].join(" ")})`);
    this.stack.pop(); //pop the value of the if
    this.module.push("(then");
    this.funcGenerator.generateLinearInstruction(funcType);
    this.module.push(")");
    this.module.push("(else");
    this.funcGenerator.generateLinearInstruction(funcType);
    this.module.push(")");
    this.module.push(")");
  }
}

let instance = new funcGenerator();
instance.generateModule("prova");
