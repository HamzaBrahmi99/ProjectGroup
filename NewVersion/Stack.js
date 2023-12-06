/**
 * We are developing a JavaScript program that generates random WebAssembly text code. 
 * The goal is to model the stack structure and operators, as described in the following comment:
 *
 * "The stack structure and operators need to be modeled. For example, assuming only i32 as the type,
 * if there are two i32 values on the stack, any operation that extends the stack without shortening it
 * (e.g., local.get, const), unary operations (e.g., local.set if there are local variables), and binary
 * operations (e.g., add, sub, etc.) can be performed. This can be done by modeling the interactions with
 * the stack for each operation (hence why I suggested doing it with objects), specifying the operation type
 * (i32 in this case), how many stack entries it consumes, and how many it introduces. With a set of all available
 * instructions, you can filter them based on the current stack. For example, if the stack is empty, you can
 * only perform operations that grow it, or a void return if the function allows."
 *
 * Your task is to implement these suggestions in the code. Use objects to model stack interactions, track
 * operation types, and manage the stack dynamically. Ensure that the generated code follows the rules described
 * in the comment and is syntactically and semantically valid WebAssembly.
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
}

module.exports = Stack;
