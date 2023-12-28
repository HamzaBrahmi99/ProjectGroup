const Instruction = require('./Instruction');

/**
 * Represents a call instruction in WebAssembly.
 * @class
 * @extends Instruction
 */
class CallInstruction extends Instruction {
  constructor(name, index, type = null, callee){
    super(name,"", callee.params.length, callee.results.length);
    this.type = type;
    this.callee = callee;
    this.index = index;
  }

  getInstance() {
    return this;
  }

  toString() {
    if (this.name === 'call') {
      return `${this.name} ${this.index}`;
    } else if (this.name === 'call_indirect') {
      return `${this.name}`;
    }
  }
}

module.exports = CallInstruction;