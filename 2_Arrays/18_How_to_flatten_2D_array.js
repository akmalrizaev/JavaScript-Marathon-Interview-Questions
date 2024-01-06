// Flattening an array means converting multidimensional array i.e 2D, 3D etc. into a single dimensional array
// To flatten an array we have to use reduce() method

// reduce()
let arr = [2, 4, 6, 8];
let result = arr.reduce((accumulator, current) => {
  return accumulator + current;
});
console.log(result); // 20

let arr2 = [2, 4, 6, 8];
let result2 = arr2.reduce((accumulator, current, index, array) => {
  accumulator += current;
  if (index === array.length - 1) {
    return accumulator / array.length;
  }
  return accumulator;
});
console.log(result2); // 5

// reduceRight()
// loops array from array.length-1 till 0th index
