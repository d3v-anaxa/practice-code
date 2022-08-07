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
