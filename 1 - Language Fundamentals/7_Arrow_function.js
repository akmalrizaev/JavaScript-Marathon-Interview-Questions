// Must known points of arrow function

// Three functional behavior:

// 1. "this" object does not work with arrow function
// const test = () => {
// 	console.log(this)
// }
// test() // Window

// 2. "arguments" object does not work with arrow function
// const test = () => {
// 	console.log(arguments);
// }
// test(4,6,8) // ReferenceError: arguments is not defined

// 3. We cannot use "new" to call arow function
// const test = () => {
// 	console.log("Hi");
// }
// const obj = new test() // Uncaught TypeError: test is not a constructor

function test() {
  //
}

// function expression
const test1 = function () {
  //
};

// Arrow function
const test2 = () => {
  //
};

const sum = (a) => {
  console.log(a);
};

const sum1 = (a, b) => a + b;

// IIFE - Immediately Invoked Function Expression
(function () {
  console.log('IIFE');
})();

// IIAF - Immediately Invoked Arrow Function
(() => {
  console.log('IIAF');
})();
