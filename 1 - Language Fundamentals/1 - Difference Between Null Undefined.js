// Difference Between "Null" & "Undefined"

// "Undefined"

// At the time of variable declaration, there is no type decided
// Before any value assigned to a variable in Javascript,
// the variable contains "undefined"
// "Undefined" is a datatype in Javascript
let x; // Undefined
let y = 9; // number
console.log(x); // Undefined
console.log(typeof x); // Undefined

// "Null"

// "Null" means nothing
// When you have a variable or object which you want to make
// empty then you assign "null" to a variable
let a = null;
let b;
console.log(a == b); // true
console.log(a === b); //false
