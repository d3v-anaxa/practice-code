//hello world

console.log("Hello world!"); // Hello world!

// Naming convention : UpperCamelCase | lowerCamelCase | snake_case | SCREAMING_SNAKE_CASE

// variable decleration

var var_stable = "James Bond";
console.log(var_stable); // James Bond

// variable value change

var var_stable = "Byomkesh Bakshi";
console.log(var_stable); // Byomkesh Bakshi

// variable decleration using let keyword

let var_default = "Leonardo Di Caprio";
console.log(var_default); // Leonardo Di Caprio

var_default = "Kate Winslet";
console.log(var_default); // Kate Winslet

// constant declaration

const lightSpeed = 299792;
console.log(lightSpeed); // 299792

// string indexing

let string = "Johnny Depp";
console.log(string[string.length - 1]); // p

// trim()

string = "   Dwayne Douglas Johnson   ";
console.log(string); //    Dwayne Douglas Johnson   

string = string.trim();
console.log(string); // Dwayne Douglas Johnson

// toUpperCase()

string = string.toUpperCase();
console.log(string); // DWANE DOUGLAS JOHANSON

// toLowerCase()

string = string.toLowerCase();
console.log(string); // dwayne douglas johnson

// slice()

string = string.slice(0, string.length - 8);
console.log(string); // dwayne douglas

// js datatypes : undefined | null | boolean | number | string | symbol | bigint | object

// typeof()

console.log(typeof var1, typeof lightSpeed); // string number

// convert number to string

let num = 1024;
num = String(num); // alt method: num = num + "";
console.log(typeof num); // string

// convert string to number
num = Number(num); // alt method: num = +num;
console.log(typeof num); // number 

// string concatination EXMP1


let firstName = "Chris";
let lastName = "Evans";
let fullName = firstName + " " + lastName;
console.log(fullName); // Chris Evans
// string concatination EXMP2

let string3 = "20";
let string4 = "48";
string3 = string3 + string4;
console.log(string3, typeof string3); // 2048 string


string3 = +string3 + +string4;
console.log(string3, typeof string3); // 2096 number

// template string : using backticks "` `"

fullName = `My first name is ${firstName} and my last name is ${lastName}.`;
console.log(fullName); // My first name is Chris and my last name is Evans.

// undefined datatype : a variable without any initialized value.
let undefined1;
var undefined2;
console.log(typeof undefined1, typeof undefined2); // undefined undefined

// null datatype : nothing datatype

let null1 = null;
console.log(null1); // null

// bug of null datatype

console.log(typeof null1); // object 

// BigInt datatype : usually used to store number >9007199254740991 {console.log(Number.MAX_SAFE_INTEGER)} | can only operate with same datatype

let BigInt1 = BigInt(5658794);
let BigInt2 = 549865497n;
console.log(BigInt1 + BigInt2); // 565498417875163105305n

// == or != : Checks only for the values

let competitor1 = "10";
let competitor2 = 10;
console.log(competitor1 == competitor2); // true
console.log(competitor1 != competitor2); // false


// === or !== : Checks for the values and datatypes

console.log(competitor1 === competitor2); // false
console.log(competitor1 !== competitor2); // true

// falsy values : false | "" | undefined | null | 0
// truthy values : everything else these falsy values are truthy values

// if else statement 

num = 8714876;

if (num % 2 == 0) {
    console.log(`${num} is an even number`)
}
else {
    console.log(`${num} is an odd number`)
} // 8714876 is an even number

// if else statement using falsy values

let condition1 = false;

if (condition1) {
    console.log(condition1)
}
else {
    console.log(`condition1 is a falsy value`)
} // condition1 is a falsy value

// ternary operator / conditional operator

let inputYear = 2022;
let outputYear = inputYear % 4 == 0 ? `${inputYear} is a leap year` : `${inputYear} is not a leap year`;
console.log(outputYear); // 2022 is not a leap year

// and operator --------------------------------------------------------- |
firstName = "Mark";
let age = "55";
if (firstName[0] === "M" && age < 40) {
    console.log(`${firstName} is still young`)
} else {
    console.log(`${firstName} is getting old`)
} // Mark is getting old

// or operator ---------------------------------------------------------- |

let child = "boy";

if (child === 'boy' || child === 'girl') {
    console.log(`Congrats! you have a ${child}`)
} else {
    console.log(`I'm sorry`)
} // Congrats! you have a boy

// nested if else ------------------------------------------------------- |

/*
let num_random = Math.floor(Math.random()*10) // console.log(num_random)
let num_guess = +prompt('Guess the single digit number')

if(num_guess === num_random){
    console.log('Correct!')
}else {
    if ( num_guess>num_random ) {
        console.log(`The number is lower then ${num_guess}`)        
    }else {
        console.log(`The number is higher then ${num_guess}`)     
    }
} // {output is uncertain}
*/

// else if : if else statement with >2 conditions ------------------------ |

/*
let mealTime_in_hrs = new Date().getHours
if ( 7>=mealTime_in_hrs>=10 ) {
    console.log("Time for Breakfast");
} else if(13>=mealTime_in_hrs>=15){
    console.log("Time for Lunch");
} else if(17>=mealTime_in_hrs>=19){
    console.log("Time for some evening tea");
} else if(21>=mealTime_in_hrs>=23){
    console.log("Time for Dinner");
} else {
    console.log("I'll eat later");
} // {output is uncertain}
*/

// switch statement ------------------------------------------------------- |

/*
let month_index = +prompt("Enter the month index")
let month_list = ["January","February","March","April","May","June","July","August","September","October","November","December"];
switch(month_index){
    case 0:
    console.log(`This is the month of ${month_list[month_index]}`);
    break;
    case 1:
    console.log(`This is the month of ${month_list[month_index]}`);
    break;
    case 2:
    console.log(`This is the month of ${month_list[month_index]}`);
    break;
    case 3:
    console.log(`This is the month of ${month_list[month_index]}`);
    break;
    case 4:
    console.log(`This is the month of ${month_list[month_index]}`);
    break;
    case 5:
    console.log(`This is the month of ${month_list[month_index]}`);
    break;
    case 6:
    console.log(`This is the month of ${month_list[month_index]}`);
    break;
    case 7:
    console.log(`This is the month of ${month_list[month_index]}`);
    break;
    case 8:
    console.log(`This is the month of ${month_list[month_index]}`);
    break;
    case 9:
    console.log(`This is the month of ${month_list[month_index]}`);
    break;            
    case 10:
    console.log(`This is the month of ${month_list[month_index]}`);
    break;            
    case 11:
    console.log(`This is the month of ${month_list[month_index]}`);
    break;
    case 12:
    console.log(`This is the month of ${month_list[month_index]}`);
    break;
    default:
    console.log(`Invalid Month`);
    break;
} // {output is uncertain} 
*/

// [OPTIMIZED SWITCH STATEMENT CODE ] >>> 

/*
let month_index = prompt("Enter the month index") - 1;
let month_list = ["January","February","March","April","May","June","July","August","September","October","November","December"];
switch(month_list[month_index]){
    case undefined:
    console.log(`Invalid index `);
    break;
    
    default:
    console.log(`This is the month of ${month_list[month_index]}`);
    break;
};
*/

// while loop ------------------------------------------------------------- |

let sum = 0;
num = 0;
while (num < 10) {
    num++;
    sum += num
}
console.log(sum)

// for loop : let keyword is used for internal declaration whereas var keyword is used for global declaraion---------------------------------------------------------------- |

for (let num_initial = 0; num_initial <= 10; num_initial++) {

    // if (num_initial===5){
    //         break;
    // } // use of break keyword

    // if (num_initial===5){
    //         continue;
    // } // use of continue keyword

    sum += num_initial;
}
console.log(sum);

// arrays {reference type} : ordered collection of items or elements.

let array = ["Bill Gates", "Warren Buffet", "Jeff Bezos", "Larry Ellison"]

// checking an array

console.log(typeof array); // object
console.log(Array.isArray(array)); // true

// array push pop : LastInLastOut


let poppedItem = array.pop();
console.log(poppedItem); // Larry Ellison
console.log(array); // ["Bill Gates","Warren Buffet","Jeff Bezos"]

array.push("Mukesh Ambani");
console.log(array); // ["Bill Gates","Warren Buffet","Jeff Bezos","Mukesh Ambani"]

// array unshift shift : FirstInFirstOut

poppedItem = array.shift()
console.log(poppedItem); // Bill Gates
console.log(array); // ["Warren Buffet","Jeff Bezos","Mukesh Ambani"]

array.unshift("Elon Musk")
console.log(array); // ["Elon Musk","Warren Buffet","Jeff Bezos","Mukesh Ambani"]

/* push pop is fast as compared to shift and unshift */// primitive datatypes : [string, number, bigint, boolean, undefined, symbol, and null] : The value is stored in the memory stack seperately.

let p_data_1 = "10";
let p_data_2 = p_data_1;
console.log("Value of p_data_1 = ", p_data_1); // 10
console.log("Value of p_data_2 = ", p_data_2); // 10

p_data_1 = "100"
console.log("Value of p_data_1 = ", p_data_1);  // 100
console.log("Value of p_data_2 = ", p_data_2); // 10


// reference datatypes : [Array , Function , and Object] : The value is stored in a heap which can be fetched through its address contained by every pointer of a variable stored in the memory stack.

let r_data_1 = ["item1", "item2", "item3"];
let r_data_2 = r_data_1;
console.log("value of r_data_1 = ", r_data_1); // ["item1","item2","item3"]
console.log("value of r_data_2 = ", r_data_2); // ["item1","item2","item3"]
r_data_1.unshift("item0");
console.log("value of r_data_1 = ", r_data_1); // ["item0","item1","item2","item3"]
console.log("value of r_data_2 = ", r_data_2); // ["item0","item1","item2","item3"]

// cloning an array : Method 1 :  using slice()

r_data_2 = r_data_1.slice(0);
r_data_1.push("item4");
console.log("using slice() : value of r_data_1 = ", r_data_1); // ["item0","item1","item2","item3","item4"]
console.log("using slice() : value of r_data_2 = ", r_data_2); // ["item0","item1","item2","item3"]

// cloning an array : Method 2 :  using concat()

let r_data_3 = [].concat(r_data_2);
console.log("using concat() : value of r_data_2 = ", r_data_2); // ["item0","item1","item2","item3"]
console.log("using concat() : value of r_data_3 = ", r_data_3); // ["item0","item1","item2","item3"]
r_data_3.push("item4");
console.log("using concat(): value of r_data_2 = ", r_data_2); // ["item0","item1","item2","item3"]
console.log("using concat(): value of r_data_3 = ", r_data_3); // ["item0","item1","item2","item3","item4"]

// cloning an array : Method 3 :  using spread operator

let r_data_4 = [...r_data_3];
console.log("spread operator : value of r_data_3 = ", r_data_3); // ["item0","item1","item2","item3","item4"]
console.log("spread operator : value of r_data_4 = ", r_data_4); // ["item0","item1","item2","item3","item4"]

// adding arrays : using slice(), concat(), spread operator

let addedItems = ["item5", "item6", "item7"]
let r_data_5 = /* r_data_5.slice(0).concat(addedItems); */ /* [].concat(r_data_5,addedItems) */[...r_data_4, ...addedItems]
console.log("spread operator : value of r_data_5 = ", r_data_5); // ["item0","item1","item2","item3","item4","item5","item6","item7"]

// for loop in array : reverse printing

for (let index = r_data_5.length - 1; index >= 0; index--) {
    const element = r_data_5[index];
    console.log("for loop : ", element);
} // 

// using const for creating array : This is a quite safe method to protect reference datatype from unwanted manupulation;

const constant_array = ["data1", "data2"];
console.log("using const for creating array : value of the constant_array : ", constant_array); // ["data1","data2"]
constant_array.unshift("data0");
console.log("using const for creating array : value of the changed constant_array : ", constant_array); // ["data0","data1","data2"]

// while loop : reverse printing;
let index = constant_array.length - 1;
while (index >= 0) {
    console.log(" while loop : ", constant_array[index]);
    index--;
} // data2  data1   data0

// for of loop : getting the elements of an array

for (const element of constant_array) {
    console.log("for of loop : ", element);
} // data0  data1   data2

// for in loop : getting the index of an array

for (const index in constant_array) {
    console.log("for in loop : ", index);
} // 0  1   2

// array destructuring

constant_array.push("data3")
const [elem1, elem2, ...elem3] = constant_array;
console.log("array destructuring : ", elem1); //data0
console.log("array destructuring : ", elem2); //data1
console.log("array destructuring : ", elem3); // ["data2","data3"]

// OBJECT : reference datatype

const constant_object = {
    pet: "Dog",
    age: 1,
    gender: "female",
    "fav food": ["chicken", "eggs", "buiscuits"]
};

console.log("OBJECT :", constant_object); // { pet : "Dog", age : 1, gender : "female", fav_food : ["chicken","eggs","buiscuits"]
constant_object.friend = "Parrot";
console.log("OBJECT : changed : ", constant_object); // { pet : "Dog", age : 1, gender : "female", fav_food : ["chicken","eggs","buiscuits"], friend : "Sweetu"}

/* By default, the keys of an object are saved as strings */

// dot notation

console.log("dot notation : constant_object.pet : ", constant_object.pet); // Dog

// bracket notation

console.log(`bracket notation : constant_object["fav food"] :`, constant_object["fav food"]); // ["chicken","eggs","buiscuits"]

// adding new key in object

let key = "weight";
constant_object[key] = 20;
console.log("adding new key in object : constant_object : ", constant_object); // multiple_line_output

// iterating keys : using for in loop & keys()

for (const key in constant_object) {
    console.log(`Iterating keys : constant_object["${key}"]`, constant_object[key]); // multiple_line_output
};

// computed properties
let key1 = "key_1";
let key2 = "key_2";

let value1 = "value_1";
let value2 = "value_2";

let object_1 = {
    [key1]: value1,
    [key2]: value2,
}
console.log("computed properties : ", object_1);

// spread operator in objects

let object_2 = {
    key_3: "value_3",
    key_4: "value_4",
}

let combined_object = { ...object_1, ...object_2 };
console.log("spread operator in objects : ", combined_object);

// object destructuring : ** use the same key name while destructuring**

const object_government = {
    country: "India",
    prime_minister: "Narendra Modi",
    states: 28,
    union_territories: 9
}

let { country: info1, prime_minister: info2, ...restInfo } = object_government;
console.log("object destructuring : ", info1);
console.log("object destructuring : ", info2);
console.log("object destructuring : ", restInfo);

// nested destructuring : objects in array

const profiles = [
    { user_Id: "Steven", dob: "1918", sex: "male" },
    { user_Id: "Tony", dob: "1970", sex: "male" },
    { user_Id: "Natasha", dob: "1984", sex: "female" }
]
let [{ user_Id }, { sex }, { dob }] = profiles;
console.log(" nested destructuring : ", user_Id); // Steven

for (const props of profiles) {
    console.log("nested destructuring : for of loop : ", props);
} // multiple_line_output
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
// default  parameter

function def_param(def_addend_1=0 , def_addend_2 = 0){
    if (def_addend_1==0 && def_addend_2==0) {
        return("No input found")
    }
    return def_addend_1 + def_addend_2;
}

console.log("default  parameter : ",def_param()); // output

// rest parameter

let sum = 0;
function summation(...addend) {
    for (const elements of addend) {
        sum += elements;
    } return sum;
}

console.log("rest parameter : ",summation(217984182853358, 5729570018497163,346974691496496,1489141489148)); // 6296018034336165

// parameter destructuring : used with objects (greatly used in react)

let destructured_object = {
    name : ["abc","mno","xyz"],
    age : ["123","456","789"],
    gender : ["M","F"]
}

let destructuring_function = ({name , age, gender}) => {
    console.log(`parameter destructuring : ${name}`);
}
destructuring_function(destructured_object); // parameter destructuring : abc,mno,xyz

// callback function : when a function is passed as a parameter of another function 

function callback_function(callback) {
    console.log(`callback function : recalling the summation() : `,callback(1,1)); 
}
callback_function(summation); // callback function : recalling the summation() :  6296018034336167

// function returning function 

function parent_function() {
    return function returning_function(){
        return "function returning function";
    }() // this ending parenthesis is essential in order to return the executed value of the returning_function() [in this case]
}
console.log(parent_function()); // function returning function

// important array methods ---------------------------------------------------------------------------- |

// forEach()

/* let table_number = prompt("Which Integer's table you want to know?");
let table = [1,2,3,4,5,6,7,8,9,10];
console.log(`forEach() : The table of ${table_number}`);
table.forEach(function(index){
    console.log(`forEach() : ${table_number} * ${index} = ${table_number*index}`);
}) // uncertain output
*/

// map()

const new_array = ["a","b","c","d"];
const upperCase = function(item){
    let upperCaseItem = item.toUpperCase();
    return upperCaseItem;
};// tghis function can also be declared inside the map() [same as an anonymous function]

const saved_array = new_array.map(upperCase); // Here, the parameter "item" refers for each item in the "new_array" & "upperCase" function is passed as the argument of this map() function
console.log("map() : UpperCase : ",saved_array); // map() : UpperCase : ['A', 'B', 'C', 'D']

// filter()

const filter_array = [];
for (let year = 2000; year <= 2100 ; year++) {
    filter_array.push(year);
}
const filtered_array = filter_array.filter((item)=>{
    if (item%100===0) {
        return item%400===0
    }else {
        return item%4===0
    } // perfect condition application of leap year
}
)
console.log(`filter() : leapYear :`,filtered_array); // filter() : leapYear : (26) [2000, 2004, 2008, 2012, 2016, 2020, 2024, 2028, 2032, 2036, 2040, 2044, 2048, 2052, 2056, 2060, 2064, 2068, 2072, 2076, 2080, 2084, 2088, 2092, 2096, 2100]

// reduce() : first parameter interacts with the next parameter and the cycle continues untill the final result then shift as the value of the first parameter and the cycle continues

const reduced_value = filtered_array.reduce((accumulator, currentValue)=> {
    return (accumulator+currentValue)/2;
},100) // initial value of the first parameter can be passed after the end of the callback function

console.log(`reduce() :`,reduced_value) // reduce() : 2096.0000001192093

// sort() : sort method works according to the ASCII value of each character

const amazon_products = [
    {product_ID : "A1", product_name : "1a", product_price : "20"},
    {product_ID : "A2", product_name : "1b", product_price : "1000"},
    {product_ID : "A3", product_name : "1c", product_price : "700"},
    {product_ID : "A4", product_name : "1d", product_price : "300"},
    {product_ID : "A5", product_name : "1e", product_price : "8000"},
    {product_ID : "A6", product_name : "1f", product_price : "60"},
]

const lowToHigh = amazon_products.slice(0).sort((component1, component2)=>{
    return component1.product_price - component2.product_price
})

const highToLow = amazon_products.slice(0).sort((component1, component2)=>{
    return component2.product_price - component1.product_price
})

console.log(`sort() : ascending :`,lowToHigh); // multiline output
console.log(`sort() : descending :`,highToLow); // multiline output
// find()

let array_20220614 = ["item0","item1","item2","item3"];
const found_value = array_20220614.find((unit)=>unit[unit.length-1]==3); // the parameter id refers to every item of "array_20220614"
console.log("find() :",found_value); // item3

// every()

const every_value = array_20220614.every((unit)=>unit.slice(0,4)==="item")
console.log("every() :",every_value); // true

// some()

 const some_value = array_20220614.some((unit)=>unit.length > 4)
 console.log("some() :",some_value); // true

// fill() : method manupulates the main array

const filled_array = array_20220614.fill(undefined,3,4); // replacing item using fill()
console.log(filled_array); // ['item0', 'item1', 'item2', undefined]

// splice() : method manupulates the main array

const spliced_array = array_20220614.splice(3,1); // item deletion and storing into another array
console.log(`splice() :`,spliced_array); // [undefined]
spliced_array.splice(0,1,'inserted_item'); // item insertion in new array
console.log(`splice() :`,spliced_array); // ['inserted_item']

// ------------------------------------------------------------------------------------------------------ |
// iterables : the datatypes those can run through forOf loop [strings & arrays]

let string_20220618 = "watermelon";
let array_20220618 = ["cd","ls","sudo"];

for (const iterator of string_20220618) {
    console.log("iterables : string :",iterator);
}

for (const iterator of array_20220618) {
    console.log("iterables : array :",iterator);
}

// array like objects : datatypes those acquire length and can be accessed using index[string]

// set : a type of iterable | store data in linear order [same as array] | indexing unavalable | unique items only [duplicates are ignored] [exception : array; reason : different memory address though items can be same] | insignificant order

const set_20220618 = new Set([1,2,3]);

set_20220618.add(4); // add()
console.log(`Set() : add() :`,set_20220618); // Set {1,2,3,4}

set_20220618.delete(1); // delete()
console.log(`Set() : delete() :`,set_20220618); // Set {2,3,4}

if (set_20220618.has(3)) {
    console.log(`Set() : has() : `,set_20220618.has(3) ); // has()
} else {
    console.log(false);
} // true

for (const elements of set_20220618) {
    console.log(`Set() : forof loop :`,elements);
} // multiple_line_output

// Map() : A Map holds key-value pairs where the keys can be any datatype. | A Map remembers the original insertion order of the keys.

const mapped_object_20220623 = new Map(); // Maps declaration

mapped_object_20220623.set(1,"mercury");
mapped_object_20220623.set(2,"venus");
mapped_object_20220623.set(3,"earth");
mapped_object_20220623.set(4,"mars");
mapped_object_20220623.set(5,"jupiter");
mapped_object_20220623.set(6,"saturn");
mapped_object_20220623.set(7,"uranus");
mapped_object_20220623.set(8,"neptune"); // set()

console.log(`Map() : set() :`,mapped_object_20220623); // multiple_line_output

mapped_object_20220623.forEach(element => {
    console.log(`Map() : forEach() :`,element) // forEacsh()
}); // multiple_line_output

for (const [keys, values] of mapped_object_20220623) {
    console.log(`Map() : Destructuring :`, keys,`=>`, values);
}// multiple_line_output

// cloning an object : Method 1 : using spread operator
let object_20220623 = {
    "id" : "A1",
    "product_name" : "abc",
    "shelf_life" : {
        mfd : "2000-01-01",
        exp : "2002-01-01"
    }
}

let object_1_20220623 = {...object_20220623};
console.log(`Cloning an object : using spread operator :`, object_1_20220623);

// cloning an object : Method  : using Object.assign()

let object_2_20220623 = Object.assign({}, object_1_20220623)
console.log(`Cloning an object : using Object.assign() :`, object_2_20220623);

// optional chaining 

console.log(`optional chaining :`,object_20220623?.price); // undefined

// methods : functions inside an object

function method_1_20220623() {
    console.log(`Method : The manufacturing and expiry date of product ${this.product_name} is ${this.shelf_life.mfd} and ${this.shelf_life.exp} resectively.`);
}

object_1_20220623.method = method_1_20220623;
object_1_20220623.method(); // Method : The manufacturing and expiry date of product abc is 2000-01-01 and 2002-01-01 resectively.

/* window is a pre declared global variable that is available when js script is running in a browser [node through node js] : this object can be ignored by usikng the "use strict" keyword. [usually placed on top of the file]*/

// call() method : a function belonging to any object can be be called to run for another object [specified 'this' keyword object changes].

const object_1_20220625 = {
    country : "INDIA",
    police : 100,
    std : "+91",
    getPOLICE : function (){
        return `${this.country} : police : ${this.police}`
    }
}

const object_2_20220625 = {
    country : "USA",
    police : 911,
    std : "+1"
};
console.log(`call() method :`,object_1_20220625.getPOLICE.call(object_2_20220625)); // USA => 911

// apply() method : indifferet against call() method . Only defference : uses array of items to pass as the argumant of any function |[...]|.

function getSTD(population) {
    return `${this.country} : std code : ${this.std} : population :${population}`
}
console.log(`apply() method :`,getSTD.apply(object_1_20220625,["1.3 Billion"])); // apply() method : INDIA => +91

// bind() method : returns a function that can be stored in any newly declared variable for furthur use purposes

console.log(`bind() method :`,object_1_20220625.getPOLICE.bind(object_1_20220625)());

/* mistakes to avoid */

const object_3_20220625 = {
    name : "Mr. NOBODY",
    number : "+1***123",
    contact : function () {
        return `Reach to ${this.name} at ${this.number}`
    }
}

const calling = object_3_20220625.contact.bind(object_3_20220625)();
console.log(`**NOTES** :`,calling); // without call(), bind() or apply() method the declared `this` keyword would have reffered towards the external `window` object


// _proto_ / [[Prototype]] : a property that refers to another object without storing it inside the current object

const object_1_20220628 = {
    IPv4: "8.8.8.8",
    IPv6: "0000:0000:0000:0000:0000:ffff:0808:0808",
    name: "https://dns.google/"
}

const object_2_20220628 = {
    IPv4: "172.217.166.228",
    IPv6: "0000:0000:0000:0000:0000:ffff:acd9:a6e4",
    name: "www.google.com",
    linked: Object.create(object_1_20220628)
};
console.log(`_proto_ : Object.create() :`, object_2_20220628.linked.IPv4, `=>`, object_2_20220628.linked.name); // _proto_ : Object.create() : 8.8.8.8 => https://dns.google/

console.log(object_1_20220628);

// prototype : an object/a free space in every function to store specific keys and values

function function_1_20220628() {
    return `function_1_20220628`
}

if (function_1_20220628.prototype) {
    console.log(`prototype : present`);
} else {
    console.log(`prototype : absent`);
}

console.log(function_1_20220628.prototype);
console.log(window);
// <--- Regex : serching in javascript --->

// RegExp using regular expression literal
let phrase20220806 = "This is a test phrase for checking REGEX";
let REGEXelem1 = /regex/i;

// RegExp using constructor function of RegExp
let REGEXelem2 = new RegExp (/regex/i)

// .test
console.log(`.test() method in RegExp :`,REGEXelem1.test(phrase20220806));

//.match
console.log(`.match() method in RegExp :`,phrase20220806.match(REGEXelem2));
// class 
class User {
  constructor(name, yearOfBirth, gender) {
    this.name = name,
      this.yearOfBirth = yearOfBirth,
      this.gender = gender
  }

  // static keyword
  static default() {
    return `Invoked ${this.name} constructor`
  }
}
// extends keyword

class Author extends User {
  constructor(name, yearOfBirth, gender, password) {
    super(name, yearOfBirth, gender),
      this.password = password
  }
}

const a1 = new User('ayanaksha', 2003, 'male')
const dev = new Author('d3v-anaxa', 2003, 'male', '123-AXX-XXXX');

console.log(User.default()); // Invoked User constructor
console.log(a1); // User { name: 'ayanaksha', yearOfBirth: 2003, gender: 'gender' }
console.log(Author.default()); // Invoked Author constructor
console.log(dev); // Author { name: 'd3v-anaxa', yearOfBirth: 2003, gender: 'male', password: '123-AXX-XXXX' }// Compilation Phase    ->  (1)Lexing 
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