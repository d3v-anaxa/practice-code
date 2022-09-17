// Compilation Phase    ->  (1)Lexing 
//                          (2)Parsing[creation of ABSTRACT SYNTAX TREE using code chunks for further code generation]
//                          (3) Code Generation
// Code Execution Phase ->  (1)Global Execution Context ->  (i)Creation Phase [contains variables:undefined (using 'var' keyword), this keyword (window object in browser)]
//                                                          (ii)Code Execution Phase [syncronous code execution]
//                          (2)

console.log(this);
// console.log(window);
console.log(firstName);
var firstName = 'Ayanaksha';
console.log(firstName);
this.firstName = firstName
console.log(this);

const func = function () {
  return "Konnichiwa"
}
console.log(func())