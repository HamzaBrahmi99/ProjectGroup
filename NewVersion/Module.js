const fs = require("fs");
const os = require("os");
class Module {
    constructor() {
      this.watCode = "(module (\n";
      this.functionTypes = [];
      this.functions = [];
    }
  
    addFunctionType(funcType) {
        this.functionTypes.push(funcType);
      
        let typeCode = "(type (func";
      
        if (funcType.params.length > 0) {
          typeCode += " (param";
          for (const param of funcType.params) {
            typeCode += ` ${param}`;
          }
          typeCode += ")";
        }
      
        if (funcType.results.length > 0) {
          typeCode += " (result";
          for (const result of funcType.results) {
            typeCode += ` ${result}`;
          }
          typeCode += ")";
        }
      
        typeCode += "))\n";
      
        this.watCode += typeCode;
      }

      generateFunctionTable(max_number_of_functions) {
        this.watCode += `(table ${max_number_of_functions} funcref)\n`;
    
        let elem = "(elem (i32.const 0)";
        for (let i = 0; i < max_number_of_functions; i++) {
          elem += ` ${i}`;
        }
        elem += ")\n";
        this.watCode += elem;
  }
  
      addStartExport(export_id) {
        this.watCode += `(export "start" (func ${export_id}))\n`;
      }
  
      addFunction(funcIndex, typeIndex, params, result, funcBody) {
        //const paramsString = params.map((param, index) => `(param $p${index + 1} ${param})`).join(' ');
        //const resultString = result.map(res => `(result ${res})`).join(' ');
        const paramsString = params.length ? `(param ${params.join(" ")})` : "";
        const resultString = result.length ? `(result ${result.join(" ")})` : "";
        const functionString = `(func $${funcIndex} (type ${typeIndex}) ${paramsString} ${resultString}\n${funcBody}\n)\n`;
        this.watCode += functionString;
      }
  
    closeModule() {
      this.watCode += ")\n";
    }
  
    saveToFile(fileName) {
      // Save the watCode to a .wat file
      fs.writeFileSync(`./output_files/${fileName}.wat`, this.watCode);
    }
  
  }
  
  module.exports = Module;