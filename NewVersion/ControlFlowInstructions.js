const Instruction = require('./Instruction.js');
const CallInstruction = require('./CallInstruction');

class ControlFlowInstructions {
    constructor() {
      this.instructions = [
        new Instruction('if',"", 1, 0),
        // Function call instructions will be added by addCallInstructions()
      ];
    }
    filter(callback) {
        return this.instructions.filter(callback);
      }
    addCallInstructions(name, index, callee) {
      this.instructions.push(new CallInstruction(name, index, null, callee));
    }
    addCallIndirectInstructions(name, index, caller, callee) {
      this.instructions.push(new CallInstruction(name,index,caller,callee));
  }

  }
  module.exports = ControlFlowInstructions;