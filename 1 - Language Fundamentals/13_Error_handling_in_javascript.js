let a = 10;
console.log(`value of a${a}`);
letb = 50;
console.log(`value of B${b}`); // ReferenceError: b is not defined

// We do not face any error at compile time but at run time if we face any error
// then, we can use the try...catch block

try {
  // statements
} catch (err) {
  // statements
}

try {
  let a = 10;
  console.log(`value of a${a}`);
  letb = 50;
  console.log(`value of B${b}`);
} catch (err) {
  console.log('Error found');
  console.log(err.name);
  console.log(err.message);
  console.log(err.stack);
}

// It might also happen that you want to generate your own custom errors,
// you can generate custom errors by using "throw" operator
//  throw <error object>

let c = 8;
let ageErr = new Error();
try {
  if (c < 18) {
    throw ageErr;
  } else {
    console.log('valid age');
  }
} catch (err) {
  console.log('Invalid age'); // Invalid age
}

try {
  // statements
} catch (err) {
  // statements
} finally {
  // statements
} // Code inside finally block is executed at the end & is always executed
