const Instruction = require('./Instruction');

class Instructions {
  constructor() {
    this.instructions = [
      // Stack manipulation
      new Instruction('const', 'i32', 0, 1),
      new Instruction('drop', '', 1, 0),
      //new Instruction('local.get', 'i32', 0, 1),
      //new Instruction('local.set', 'i32', 1, 0),
      // Arithmetic operators
      new Instruction('add', 'i32', 2, 1),
      new Instruction('sub', 'i32', 2, 1),
      new Instruction('mul', 'i32', 2, 1),
      new Instruction('div_s', 'i32', 2, 1),
      new Instruction('div_u', 'i32', 2, 1),
      new Instruction('rem_u', 'i32', 2, 1),
      // Bitwise operators
      new Instruction('and', 'i32', 2, 1),
      new Instruction('or', 'i32', 2, 1),
      new Instruction('xor', 'i32', 2, 1),
      // Comparison operators
      new Instruction('eq', 'i32', 2, 1),
      new Instruction('ne', 'i32', 2, 1),
      new Instruction('lt_s', 'i32', 2, 1),
      new Instruction('lt_u', 'i32', 2, 1),
      new Instruction('gt_s', 'i32', 2, 1),
      new Instruction('gt_u', 'i32', 2, 1),
      new Instruction('le_s', 'i32', 2, 1),
      new Instruction('le_u', 'i32', 2, 1),
      new Instruction('ge_s', 'i32', 2, 1),
      new Instruction('ge_u', 'i32', 2, 1),
    ];
}
  filter(callback) {
    return this.instructions.filter(callback);
  }
}
module.exports = Instructions;


/*
Da mettere nel main generator per decidere se fare call o call_indirect:
const callProbability = 0.5; // Replace with your actual probability

for (const func of functions) {
  const instructionName = Math.random() < callProbability ? 'call' : 'call_indirect';
  instructions.push(new CallInstruction(instructionName, func));
}
*/