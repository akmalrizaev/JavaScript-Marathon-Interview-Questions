// When do we get NaN as output
// NaN is a global property representng "Not-A-Number"
// We normally get this error when there is a non numeric value or
// operation perfomed

let a = 5;
let b = 'value';
console.log(a * b); //NaN

// isNaN() is a function which returns true or false depending on the expression
if (!isNaN(a * b)) {
  console.log('Valid');
} else {
  console.log('Invalid');
}

console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

// isFinite() method checks whether the value is a regular number or not
let c = 10;
let d = 'value';
console.log(isFinite(a * b)); //false
