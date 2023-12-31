// When do we get Infinity or Infinity as output

// Infinity is a special integer value which is greater than any value or in other
// words it is the highest possible value available in Javascript

//  There are 2 possibilities for Infinity:
// - Positive Infinity (POSITIVE_INFINITY)
// - Negative Infinity (NEGATIVE_INFINITY)

console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);

// In Javascript the numbers are stored in 64-bit format
// It means any value which cannot fit in the 64-bit format will return Infinity
// It cannot hold the value, the value is larger than 64-bit

console.log(9e400); // Infinity
console.log(-9e400); // -Infinity

// We can hav an "if" condition like this:

if (num === Number.POSITIVE_INFINITY) {
  return 'Negative infinity value';
} else {
  return num; // or some calculation
}

// To check finite or infinite value there is also isFinite() method in Javascript
