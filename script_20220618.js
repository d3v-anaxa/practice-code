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
