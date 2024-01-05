//  Array Destructuring

// Normally when we have a variable it can store only 1 value
// for e.g. let i = 10;
// When we want to store values under one name, then we can use an array

let arr = [4, 7, 9];
let arr1 = ['Hi', true, 900];
console.log(arr); //[4,7,9]
console.log(arr1.length); //3
console.log(arr1[0]); // Hi

let arr2 = [
  { pCode: 1, pName: 'Apple' },
  { pCode: 2, pName: 'Banana' },
  { pCode: 3, pName: 'Orange' },
];
console.log(arr[0].pName); // Apple

// Traversal
let arr3 = ['ES5', 'ES6', 'ES7', 'ES8'];
for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
}

// In JavaScript ES6 onwards we have for..in & for..of to loop through an array
//  for..in will display the index number & for..of will return the elements

for (let elem of arr3) {
  console.log(elem);
}

arr3.forEach((elem, index) => {
  console.log(elem, index);
});
// forEach cannot be stopped in between like you break the loop
