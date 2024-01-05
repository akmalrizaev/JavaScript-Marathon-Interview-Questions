//  Generators
// "Generators" can help to pause & resume the code

// The function* is the keyword used to define a generator function
// yield is an operator which pauses the generator
// yield also helps to receive input & send output

const genFunction = function* () {
  console.log('Hello');
  yield; // At this point the function will pause
  console.log('World');
  yield;
  console.log('And Galaxy');
};

const gObj = genFunction(); //When a generator function is called, it does not call the function instead it returns a generator object
console.log(gObj); // Object [Generator] {}

gObj.next(); // Hello;
gObj.next(); // Wrld;
gObj.next(); // And Galaxy;

//  If we want to call the generator function from another or implementing
// recursion with generator functions then yield* syntax is used

// Generator methods: return() & throw()
// return() method returns {value: Val, done: true}, it terminates the generator

function* gen() {
  yield 'One';
  yield 'Two';
}
const gObj1 = gen();
console.log(gObj1.next());
console.log(gObj1.next());
console.log(gObj1.next());

// The throw() method throws an exception at the location of yield which made the last
// suspension in the generator function
// If there is an error condition we will write throw() or return()
