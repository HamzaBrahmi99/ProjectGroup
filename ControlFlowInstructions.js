const Instruction = require('./Instruction.js');
const CallInstruction = require('./CallInstruction');

class ControlFlowInstructions {
    constructor() {
      this.instructions = [
        new Instruction('if',"", 1, 0),
        new Instruction('loop',"", 0, 0),
        new Instruction('return', '', 0, 0),
        // Instructions call instructions will be added by addCallInstructions()
        // Instructions return instructions will be added by addReturnInstructions()
      ];
    }
    filter(callback) {
        return this.instructions.filter(callback);
      }
    getInstructions() {
      return this.instructions;
    }

    updateReturnInstruction( results ) {
      //This method should update the return instructions with the results of the function
      let returnInstructions = this.instructions.filter(instr => instr.name === 'return');
      returnInstructions[0].consumes = results;
    }
    //removeReturnInstructions() {this.instructions = this.instructions.filter(instr => instr.name !== 'return');}
    addCallInstructions(name, index, callee) {
      this.instructions.push(new CallInstruction(name, index, null, callee));
    }
    addCallIndirectInstructions(name, index, caller, callee) {
      this.instructions.push(new CallInstruction(name,index,caller,callee));
    }

  }
  module.exports = ControlFlowInstructions;