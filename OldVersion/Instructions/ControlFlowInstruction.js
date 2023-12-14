const Instruction = require("./Instruction")

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
    this.funcGenerator.generateCallInstruction(funcType, function_id);
    //this.funcGenerator.generateCallInstruction(funcType);
    this.module.push(")");
    this.module.push("(else");
    this.funcGenerator.generateCallInstruction(funcType, function_id);
    //this.funcGenerator.generateCallInstruction(funcType);
    this.module.push(")");
    this.module.push(")");
  }
}

class CallInstruction extends ControlFlowInstruction {

}

class CallIndirectInstruction extends ControlFlowInstruction {

}


module.exports = { 
    IfInstruction, 
    CallIndirectInstruction, 
    CallInstruction, 
    ControlFlowInstruction
};