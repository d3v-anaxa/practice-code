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
