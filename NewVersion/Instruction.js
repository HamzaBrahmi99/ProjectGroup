class Instruction {
    constructor(name, type, consumes, produces) {
      this.name = name;
      this.type = type;
      this.consumes = consumes;
      this.produces = produces;
    }
    toString() {
      if (this.type === '') {
        return this.name;
      } else {
        return this.type + "." + this.name;
      }
    }
}
module.exports = Instruction