// destructuring is a concept of breaking data structure like array or object literal
// into data pieces or in other words individual variables
const obj = {
  pCode: 1001,
  pName: 'Apple',
};
let { pCode, pName } = obj; // Make sure that the keyname or variable name is similar
console.log(pCode, pName); // 1001 Apple
