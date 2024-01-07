// When it comes to declaring a variable as a string, we can use:
// "", '', ``

let str = 'I am not new to JS';
console.log(str);

//  In Javascrit or even traditional languages - we can use escape sequences

let str1 = "I'm not new to JS"; // \ - is instructing that this is not the end of the quote

// \n is to insert a new line
// \u is one of those sequences which will allow to work with unicode characters
// The string data type is stored in UTF-16 format

let str2 = '\u00A9';
console.log(str2); // ©

// long unicode character
let str3 = '\u{1F601}';
console.log(str3); // 😁

// \u can be used to deal with unicode inside a string
