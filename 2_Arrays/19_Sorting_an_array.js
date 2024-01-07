// How can we sort an array
// sort() is the method used to sort elements

let products = ['Banana', 'Orange', 'Grapes', 'Apple'];
let sArr = products.sort(); // products.sort()
console.log(sArr); //["Apple","Banana", "Grapes", "Orange"]
console.log(products); //["Apple","Banana", "Grapes", "Orange"]

// To sort an array in descending order there is a callback function
// passed to sort() method which we refer to as compare function
// Compare function returns three types of values
// less than 0 i.e (-1), more than 0 i.e 1 & 0
// if compare function returns (-1) sort() will arrange "a before b"
// To sort array in ascending order you use sort() method & for descending order
// you use compare function

products.sort(function (a, b) {
  if (a > b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  if (a == b) {
    return 0;
  }
});

console.log(products); // ["Apple","Banana", "Grapes", "Orange"]

// Descending order
products.sort(function (a, b) {
  if (a > b) {
    return 1;
  }
  if (a > b) {
    return -1;
  }
  if (a == b) {
    return 0;
  }
});

console.log(products); // ["Orange", "Grapes", "Banana", "Apple"]

// If we try to sort a numeric array with only sort() method then it is going to consider
// the unicode string value if there is no compare function given
let price = [45, 23, 10, 89, 5];
console.log(price.sort()); // [10, 23, 45, 5, 89]
