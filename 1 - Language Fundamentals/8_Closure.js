// How does a closure work in JavaScript

//  When a function comes under another function a "closure" is created
// Closure pattern remembers outer variable & also helps to access outer scope members

function outer() {
  function inner() {
    console.log('Inner called...');
  }
  //   inner()
  return inner;
}

// inner(); // ReferenceError: inner is not defined

// outer();

const cl = outer();
cl();

// function outer() {
// 	return function () {
// 		console.log("Inner called");
// 	}
// }

// const cl = outer();
// cl();

// const outer = () => {
//   return () => {
//     console.log('Inner called');
//   };
// };
// const cl = outer();
// cl();

const addCounter = () => {
  let counter = 0; // "counter=0" is global variable for below arrow function
  return () => {
    counter++;
    return counter;
  };
};
const clf = addCounter();
console.log(clf());
console.log(clf());
console.log(clf());

// When we use closure , we are making private members globally available.
// Closure is useful when we want to make few private members
// available globally whe needed.
