const Instruction = require('./Instruction');

class CallInstruction extends Instruction {
  constructor(name, index, caller = null, callee){
    super(name,"", callee.params.length, callee.results.length);
    this.caller = caller;
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