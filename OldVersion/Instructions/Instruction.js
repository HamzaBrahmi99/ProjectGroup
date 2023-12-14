class Instruction {
    constructor(module, stack) {
      this.module = module;
      this.stack = stack;
    }
    executeInstruction() {
      throw new Error("Method 'executeInstruction()' must be implemented.");
    }
  }

module.exports = Instruction
  
  