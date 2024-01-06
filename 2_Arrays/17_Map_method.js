// map() method returns new array & it does not change the original array
// let newArray = arr.map(function callback(elem[,index[,array]]) {
// return value; // which is returned to newArray
// }[,thisArg])

let arr = [2, 3, 6, 4, 5];
let nArr = arr.map(function (elem) {
  return elem * elem;
});
console.log(nArr); // [4,9,36,16,25]

// Find length of each element in a array
let arr2 = ['Apple', 'Banana', 'Orange'];
let lArr = arr.map((elem) => elem.length);
console.log(lArr); // [5, 6, 7]
