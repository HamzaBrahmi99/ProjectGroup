const WasmGenerator = require('./WasmGenerator');

const wasmGenerator = new WasmGenerator();
wasmGenerator.generateModule('test.wat');