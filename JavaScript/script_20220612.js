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
