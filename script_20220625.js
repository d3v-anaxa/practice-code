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


