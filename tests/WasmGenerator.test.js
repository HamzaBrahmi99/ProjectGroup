const WasmGenerator = require('../WasmGenerator');

// To test use "npm test" in the terminal

test('should not generate loops if the probability is 0', () => {
    const generator = new WasmGenerator();
    generator.probability_of_loop = 0;
    generator.generateModule('test');
    let wat = generator.module.watCode;
    expect((wat.match(/loop/g) || []).length).toBe(0);
});

test('should not generate ifs if the probability is 0', () => {
    const generator = new WasmGenerator();
    generator.probability_of_if = 0;
    generator.generateModule('test');
    let wat = generator.module.watCode;
    expect((wat.match(/\(if/g) || []).length).toBe(0);
});

test('should not generate call instructions if the probability is 0', () => {
    const generator = new WasmGenerator();
    generator.probability_of_call = 0;
    generator.generateModule('test');
    let wat = generator.module.watCode;
    expect((wat.match(/call(?!_indirect)/g) || []).length).toBe(0);
});

test('should not generate call indirect instructions if the probability is 0', () => {
    const generator = new WasmGenerator();
    generator.probability_of_call_indirect = 0;
    generator.generateModule('test');
    let wat = generator.module.watCode;
    expect((wat.match(/call_indirect/g) || []).length).toBe(0);
});

function countNestedIfs(code) {
    let maxDepth = 0;
    let currentDepth = 0;
    let insideThenOrElse = false;

    // Split the code into tokens
    const tokens = code.split(/\s+/);

    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === '(if') {
            if (insideThenOrElse) {
                currentDepth++;
                if (currentDepth > maxDepth) {
                    maxDepth = currentDepth;
                }
            }
        } else if (tokens[i] === '(then' || tokens[i] === '(else') {
            insideThenOrElse = true;
        } else if (tokens[i] === ')') {
            if (tokens[i - 1] !== '(then' && tokens[i - 1] !== '(else') {
                if (currentDepth > 0) {
                    currentDepth--;
                }
                if (currentDepth === 0) {
                    insideThenOrElse = false;
                }
            }
        }
    }

    return maxDepth;
}

test('should not generate more than MAX_NESTED_IFS nested ifs', () => {
    const generator = new WasmGenerator();
    generator.probability_of_if = 1;
    generator.maxNestedIfs = 2;
    generator.generateModule('test');
    let wat = generator.module.watCode;
    const nestedIfs = countNestedIfs(wat);
    expect(nestedIfs).toBeLessThanOrEqual(generator.maxNestedIfs);
});

function countNestedLoops(code) {
    let maxDepth = 0;
    let currentDepth = 0;
    let insideLoop = false;

    // Split the code into tokens
    const tokens = code.split(/\s+/);

    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === '(loop') {
            if (insideLoop) {
                currentDepth++;
                if (currentDepth > maxDepth) {
                    maxDepth = currentDepth;
                }
            } else {
                insideLoop = true;
            }
        } else if (tokens[i] === ')') {
            if (currentDepth > 0) {
                currentDepth--;
            }
            if (currentDepth === 0) {
                insideLoop = false;
            }
        }
    }

    return maxDepth;
}

test('should not generate more than MAX_NESTED_LOOPS nested loops', () => {
    const generator = new WasmGenerator();
    generator.probability_of_loop = 1;
    generator.maxNestedLoops = 2;
    generator.generateModule('test');
    let wat = generator.module.watCode;
    const nestedLoops = countNestedLoops(wat);
    expect(nestedLoops).toBeLessThanOrEqual(generator.maxNestedLoops);
});

test('should not generate more than MAX_NUMBER_OF_FUNCTIONS_TO_GENERATE functions', () => {
    const generator = new WasmGenerator();
    generator.max_number_of_functions = 2;
    generator.generateModule('test');
    let wat = generator.module.watCode;
    expect((wat.match(/func $/g) || []).length).toBeLessThanOrEqual(generator.max_number_of_functions);
});