const WasmGenerator = require('./WasmGenerator');
const wasmGenerator = new WasmGenerator();

const FILENAME = 'example';
wasmGenerator.generateModule(FILENAME);