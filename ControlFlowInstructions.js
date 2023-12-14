const Instruction = require('./Instruction.js');
const CallInstruction = require('./CallInstruction');

class ControlFlowInstructions {
    constructor() {
      this.instructions = [
        new Instruction('if',"", 1, 0),
        // Instructions call instructions will be added by addCallInstructions()
        // Instructions return instructions will be added by addReturnInstructions()
      ];
    }
    filter(callback) {
        return this.instructions.filter(callback);
      }
      
    addReturnInstructions( resutls ) {
      this.instructions.push(new Instruction("return", '', resutls, 0));
    }
    removeReturnInstructions() {
      this.instructions = this.instructions.filter(instr => instr.name !== 'return');
    }
    addCallInstructions(name, index, callee) {
      this.instructions.push(new CallInstruction(name, index, null, callee));
    }
    addCallIndirectInstructions(name, index, caller, callee) {
      this.instructions.push(new CallInstruction(name,index,caller,callee));
    }

  }
  module.exports = ControlFlowInstructions;