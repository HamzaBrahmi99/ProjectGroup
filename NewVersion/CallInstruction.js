const Instruction = require('./Instruction');

class CallInstruction extends Instruction {
  constructor(name, index, callee) {
    super(name,"", callee.params.length, callee.results.length);
    this.callee = callee;
    this.index = index;
}

  toString() {
    if (this.name === 'call') {
      return `${this.name} ${this.index}`;
    } else if (this.name === 'call_indirect') {
      return `${this.name} (type ${this.index})`;
    }
  }
}

module.exports = CallInstruction;