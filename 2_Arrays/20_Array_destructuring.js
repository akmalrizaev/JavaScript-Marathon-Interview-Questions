// Destructuring is a concept of breaking data structure, like array or
// object literal into data pieces or in other words individual variables
// Array Destructuring
// All the values are automatically extracted from the array & assigned to individual variables

let arr = [80, 90, 93, 26];
let [a, b, c, d] = arr; // Syntax of destructuring
console.log(a, b, c, d); // 80 90 93 26

let [e, , f, g] = arr;
console.log(e, f, g); // 80 93 26

let arr2 = [4, 5, 6];
let [h, ...i] = arr2;
console.log(h, i); // h=4 i=[5,6]

// Swap values
let j = 4;
let k = 5;
[j, k] = [k, j];
console.log(j, k); // 5 4
