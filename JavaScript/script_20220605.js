// primitive datatypes : [string, number, bigint, boolean, undefined, symbol, and null] : The value is stored in the memory stack seperately.

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
