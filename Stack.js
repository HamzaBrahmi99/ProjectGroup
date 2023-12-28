/**
 * Represents a stack data structure.
 */
class Stack {
    constructor() {
        this.stack = [];
    }
    push(value) {
        this.stack.push(value);
    }
    pop() {
        return this.stack.pop();
    }
    peek() {
        return this.stack[this.stack.length - 1];
    }
    isEmpty() {
        return this.stack.length === 0;
    }
    size() {
        return this.stack.length;
    }
    getState() {
        return this.stack;
    }
    setState(state) {
        this.stack = state;
    }
    copy() {
        const copy = new Stack();
        copy.stack = [...this.stack];
        return copy;
    }
}

module.exports = Stack;
