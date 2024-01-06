// Adding & Removing Elements in Array

// There are 4 most known methods one can use to add or remove elements:
// - push()
// - pop()
// - shift()
// - unshift()

// push() & unshift() are used to add elements
// arrName.push(element1, [element2, ...elementN]);
// push() method adds 1 or more element at the end of an array & it returns the new length
// i.e, count of elements after adding elements
// unshift() method adds 1 or more element at the begining of an array & it returns the new length
// i.e, count of elements after adding elements

// pop() & shift() method are used to remove elements
// pop() method removes last element from an array & it returns that removed element
// shift() method removes first element from an array & it returns that removed element

let arr = ['One', 'Two', 'Three', 'Four', 'Five'];
console.log(arr.push('Test')); // 6
console.log(arr); // ["One", "Two", "Three", "Four", "Five", "Test"]
console.log(arr.unshift('Test')); // 7
console.log(arr); // ["Test","One", "Two", "Three", "Four", "Five", "Test"]
console.log(arr.pop()); // Test
console.log(arr); // ["Test","One", "Two", "Three", "Four", "Five"]
console.log(arr.shift()); // Test
console.log(arr); // ["One", "Two", "Three", "Four", "Five"]

// array.splice()
// splice() method can add, insert, replace or even remove one or more elements
// arrName.splice(start,[deleteCount[,value1,...,valueN]])

console.log(arr.splice(2)); // ["Three", "Four", "Five"]
console.log(arr); // ["One", "Two"]
console.log(arr.splice(1, 1)); // ["Two"]
console.log(arr); // ["One"];
console.log(arr.splice(0, 1, 'New')); // ["One"]
console.log(arr); // ["New"]
console.log(arr.splice(0, 0, 'One', 'Two')); // []
console.log(arr); // ["One","Two","New"]

// splice() method changes the original array which is not a very good practice in some cases
