const Instruction = require('./Instruction');

/**
 * Represents a collection of instructions.
 */
class Instructions {
  constructor() {
    this.instructions = [
      // Stack manipulation
      new Instruction('const', 'i32', 0, 1),
      new Instruction('drop', '', 1, 0),
      new Instruction('get', 'local', 0, 1),
      new Instruction('set', 'local', 1, 0),
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

  /**
   * Filters the instructions based on the provided callback function.
   * @param {Function} callback - The callback function used to filter the instructions.
   * @returns {Array} - The filtered instructions.
   */
  filter(callback) {
    return this.instructions.filter(callback);
  }

  /**
   * Concatenates the provided instructions to the existing instructions.
   * @param {Array} instructions - The instructions to be concatenated.
   */
  concat(instructions) {
    this.instructions = this.instructions.concat(instructions);
  }
}
module.exports = Instructions;