// Normally properties or methods should be with objects, whereas string is a primitive type
// Javascript primitive types - when executed behave like an object
// It means we do have properties and methods with these primitive types as well
// The string type has a length property which returns the length i.e, number of characters

let str = 'Javascript';
console.log(str.length); // 10

// indexOf() and lasIndexOf() search for a character or string
// within a string and returns the index number
let str1 = 'This is a test';
console.log(str1.indexOf('is')); //2
console.log(str1.lastIndexOf('is')); //5

console.log(str1.search('is')); //2

// IndexOf() can have a start position to perform search str.indexOf("is", 5)
// indexOf() cannot be used for advanced search operations like regex
//  search() method can take regular expressions as well
