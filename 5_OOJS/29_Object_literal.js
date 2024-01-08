// There are many ways to create an object in Javascript
// There is also a class "Object" which can allow you to create an object

// obj = {
//   pcode,
//   pname,
//   price,
// };
// function product(obj) {}

// Object Literal is simply a "key:value" pair data structure

let obj = {};
obj.pCode = 1001;
obj.pName = 'Apple';
obj.getData = function () {
  console.log(obj.pCode, obj.pName);
};
console.log(obj); // { pCode: 1001, pName: 'Apple', getData: [Function (anonymous)] }

let tV = 'pSize';
let obj1 = {
  pCode: 1001,
  pName: 'Apple',
  [tV]: 50,
  getData() {
    console.log(obj.pCode, obj.pName);
  },
};

const proto = Object.defineProperty({}, 'pCode', {
  writable: false,
  configurable: true,
  value: 2001,
});
const obj2 = Object.create(proto);
obj2.pCode = 3001; // 2001
console.log(obj2);

let obj3 = { a: 'First' };
let obj4 = obj3;
obj4.a = 'Second';
console.log(obj3.a); // Second

let obj5 = Object.assign({}, obj3); // cloning
obj5.a = 'Third';
console.log(obj3.a); // Second
