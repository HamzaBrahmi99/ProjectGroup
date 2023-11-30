const FuncGenerator = require('./provaGenerated.js');
const a = new FuncGenerator();

//Number of modules to generate
//a.maxNumOfFunctions=50;
let num_of_modules = 1;
for (let i = 0; i < num_of_modules; i++){
    a.generateModule(`Module-${i}`)
}
console.log("Execution time:",performance.now().toString(),"ms");