const Instruction = require("./Instruction")

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
  class BitWiseInstruction extends LinearInstruction {
    constructor(module, stack, type) {
      super(module, stack);
      let operations = ["and", "or", "xor", "shl"];
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

module.exports = {
  LinearInstruction, 
  ArithmeticInstruction, 
  BitWiseInstruction
};
