// Case conversion replace method
// Syntax of these 2 methods are:
// str.toLowerCase()
// str.toUpperCase()
// These methods are very useful when you are comparing strings

let str = 'Test';
console.log(str.toUpperCase()); // TEST
console.log(str.toLowerCase()); // test
console.log(str === 'test'); // false
console.log(str.toLowerCase() === 'test'); // true

// There is one more method - replace() which is used to replace the character or substring,
// but it also returns the new string only
// It can take a regular expression or a substring
// let newStr = str.replace(regexp or substr, newSubstr|function)

let str2 = 'Test23';
console.log(str2.replace('23', '!')); // Test!
