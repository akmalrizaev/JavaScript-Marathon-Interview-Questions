// How do we perform search in an array

// - indexOf()
// arrName.indexOf(searchElement,[startIndex])
// indexOf() will search from begining, default startIndex is 0
// indexOf() method returns the index number where the item is found
// When there is no searchElement in array then it will return -1
// If there are more than one matches found, it will return the index of the first item found
//  indexOf() search is case sensitive

// - lastIndexOf()
// arrName.lastIndexOf(searchElement,[startIndex])
// lastIndexOf() returns the last index of the found element
// By default startIndex is array.length - 1

// - includes()
// arrName.includes(searchElement,[startIndex])
// includes() method returns boolean value i.e, true or false

let arr = ['One', 'Two', 'One', 'Three', 'Four', 'One', 'Five'];
console.log(arr.indexOf('One')); // 0
console.log(arr.indexOf('One', 3)); // 5
console.log(arr.indexOf('one')); // -1
console.log(arr.lastIndexOf('One')); // 5
console.log(arr.lastIndexOf('One', 3)); // 2
console.log(arr.includes('One', 3)); // true
console.log(arr.includes('Test')); // false

// find()
let arr2 = [2300, 4500, 5600, 7800, 1200];
const rVal = arr2.find((element) => {
  return element > 3000;
});
console.log(rVal); // 4500

// findIndex()
let arr3 = [2300, 4500, 5600, 7800, 1200];
const rVal2 = arr3.findIndex((element) => {
  return element > 3000;
});
console.log(rVal2); // 1

// filter()
let arr4 = [2300, 4500, 5600, 7800, 1200];
const rVal3 = arr4.filter((element) => {
  return element > 3000;
});
const rVal4 = arr4.filter((element) => {
  return element > 30000;
});
console.log(rVal3); // [4500, 5600, 7800]
console.log(rVal4); // []
