// We can divide the extraction methods in 2 main categories:
// 1. String extraction methods
// Slice
// str.slice(startIndex[,endIndex])
// It returns the extracted part as a new string i.e without changing the original string
let str = 'First second third fourth';
console.log(str.slice(10)); // nd third fourth
console.log(str.slice(-10)); // ird fourth
console.log(str.slice(10, 15)); // nd th
console.log(str.slice(-10, -5)); // ird f

// Substr
// str.substr(startIndex,[,noOfCharacters])
console.log(str.substr(10)); // nd third fourth
console.log(str.substr(10, 6)); // nd thi

// Substring
// str.substring(startIndex[,endIndex]);
console.log(str.substring(10)); // nd third fourth
console.log(str.substring(-10)); // First second third fourth
console.log(str.substring(10, 15)); // nd th

// 2. Character extraction methods
// charAt()
// returns character

// charCodeAt()
// returns integer unicode value between 0 and 65535

console.log(str.charAt(3)); // s
console.log(str.charAt()); // F
console.log(str.charCodeAt(3)); // 115
console.log(str.charCodeAt()); // 70
