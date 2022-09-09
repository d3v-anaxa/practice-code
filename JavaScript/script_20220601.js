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

/* push pop is fast as compared to shift and unshift */