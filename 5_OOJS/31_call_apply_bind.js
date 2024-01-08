// call()
// functionName.call(thisArg, arg1, arg2, ...argn)
//  "call" is used to change the reference or context or value of "this" object
function test(a, b) {
  console.log(this);
}
let obj = {
  a: 5,
};
test.call(obj, 5, 6); // { a: 5 }

// apply()
function test2(a, b) {
  console.log(this);
  console.log(a, b);
}
let obj2 = {
  a: 5,
};
test2.apply(obj2, [5, 6]);

// bind()

function test3(a, b) {
  console.log(this);
}
let obj3 = {
  a: 5,
};
const fe = test3.bind(obj3, 5, 6);
fe(); // { a: 5 }
