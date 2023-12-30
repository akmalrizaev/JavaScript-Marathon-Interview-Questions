// Difference between Rest and Spread operator

// Rest Operator (...)
// The Rest operator is part of ES6
// In ES5 we have an array like object called "arguments" which does not work
// with arrow function so we avoid it
// So whenever we use (...) with function to deal with any number of parameters,
// then we call it Rest operator, i.e. for the rest of parameters

function sum(...nums) {
  // Rest operator
  console.log(nums);
}
sum(4, 5); //[4,5]
sum(5, 6, 7, 8); // [5,6,7,8]

function sum2() {
  console.log(arguments); // array like object called "arguments"
}
sum2(4, 5); //{'0': 4, '1': 5}
sum2(5, 6, 7); //{'0': 5, '1': 6, '2': 7}

// In ES5 we have an array like object called "arguments" which does not work
// with arrow function so we avoid it
const sum3 = () => {
  console.log(arguments);
};
sum3(4, 5);
sum3(5, 6, 7, 8);

// Spread operator

// As the Rest operator puts the seperate data values in one array,
// the Spread does exactly the opposite

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [...arr1, 6, 7, 8]; //[1,2,3,4,5,6,7,8]

let arr3 = [4, 78, 90, 34, 459];
console.log(Math.max(arr3)); //NAN
console.log(Math.max(...arr3)); //459
