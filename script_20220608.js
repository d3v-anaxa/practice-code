// function declaration --------------------------------------------------------------------------- |

// Project 1

function getTime() {
    const hr = new Date().getHours();
    const min = new Date().getMinutes();
    console.log(`function declaration : Project 1 : getTime() : ${hr} hrs ${min} minutes`);
}
getTime(); // uncertain output

// Project 2

function getDay(param) {
    let Days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    return Days[new Date().getDay()-1];
}
console.log(`function declaration : Project 2 : getDay() : ${getDay()}`); // uncertain output

// Project 3

function findIndex(input, target) {
    let [...array] = input;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element === target) {
            return (`function declaration : Project 3 : findIndex("qwertyuiopasdfghjklzxcvbnm" ,"j") : ${index}`)
        };
    } return ("charcater unavailable")
}

console.log(findIndex("qwertyuiopasdfghjklzxcvbnm" ,"j")); // function declaration : Project 3 : findIndex("qwertyuiopasdfghjklzxcvbnm" ,"j") : 16

// ------------------------------------------------------------------------------------------------ |

// function expression

const addition = function (addend_1, addend_2) {
    return addend_1 + addend_2
}

console.log(`function expression : addition(1, 1) : ${addition(1, 1)}`); // function expression : addition(1, 1) : 2

// arrow function

const print_random = digits => {
    return Math.floor(Math.random()*(10**digits));
}

console.log(`arrow function : print_random(digits) : ${print_random(3)}`) // uncertain_output

// block scope : the space inside a block. variables declared inside a block of a loop or statement using var keyword can also be accessed outside the block (accessible in global environment if not declared inside a function ) 

// function scope : the block space inside a function. Variables declared inside a function (using let, var, const keyword) created there function scope and are not accessible outside the function

function statement(){
    let let_keyword_statement = "block scope vs function scope : example of function scope : This variable was declared using let keyword";
    console.log(let_keyword_statement);
    
    const const_keyword_statement = "block scope vs function scope : example of function scope : This variable was declared using const keyword";
    console.log(const_keyword_statement);
    
    if (1%1 == 0) {
        var var_keyword_statement = "block scope vs function scope : example of block scope : This variable was declared using var keyword";
    }
    console.log(var_keyword_statement);
}
statement();

// scope chain : a unique space through a variable's invocation space till the global scope

// lexical scope : the space where a variable is created / definition space

// invoking a variable through scope chain

var lexical_variable = "lexical scope : global variable";

function lexical_scope () {
    var lexical_variable = "lexical scope : lexical scope variable";
    
    let environment = () => {
        var lexical_variable = "lexical scope : local variable ";
        
        console.log(lexical_variable); // lexical scope : local variable 
    }
    
    environment();
    console.log(lexical_variable); // lexical scope : variable inside lexical scope variable
}
lexical_scope();
console.log(lexical_variable); // lexical scope : global variable
