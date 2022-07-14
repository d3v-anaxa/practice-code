
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

