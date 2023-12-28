const Instruction = require('./Instruction.js');
const CallInstruction = require('./CallInstruction');

/**
 * Represents a collection of control flow instructions.
 */
class ControlFlowInstructions {
  constructor() {
    this.instructions = [
      new Instruction('if', '', 1, 0),
      new Instruction('loop', '', 0, 0),
      new Instruction('return', '', 0, 0),
      // Instructions call instructions will be added by addCallInstructions()
      // Instructions return instructions will be added by addReturnInstructions()
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
   * Gets all the instructions.
   * @returns {Array} - The instructions.
   */
  getInstructions() {
    return this.instructions;
  }

  /**
   * Updates the specified instruction with the provided results.
   * @param {string} instructionName - The name of the instruction to update.
   * @param {any} results - The results to update the instruction with.
   */
  updateInstruction(instructionName, results) {
    let instruction = this.instructions.filter(instr => instr.name === instructionName);
    instruction[0].consumes = results;
  }

  /**
   * Updates the return instructions with the provided results.
   * @param {any} results - The results to update the return instructions with.
   */
  updateReturnInstruction(results) {
    let returnInstructions = this.instructions.filter(instr => instr.name === 'return');
    returnInstructions[0].consumes = results;
  }

  /**
   * Adds a call instruction to the collection.
   * @param {string} name - The name of the call instruction.
   * @param {number} index - The index of the call instruction.
   * @param {any} callee - The callee of the call instruction.
   */
  addCallInstructions(name, index, callee) {
    this.instructions.push(new CallInstruction(name, index, null, callee));
  }

  /**
   * Adds a call indirect instruction to the collection.
   * @param {string} name - The name of the call indirect instruction.
   * @param {number} index - The index of the call indirect instruction.
   * @param {any} caller - The caller of the call indirect instruction.
   * @param {any} callee - The callee of the call indirect instruction.
   */
  addCallIndirectInstructions(name, index, caller, callee) {
    this.instructions.push(new CallInstruction(name, index, caller, callee));
  }
}
  module.exports = ControlFlowInstructions;