// Function Scope vs Block Scope

// ES5 has function scope & that is because of "hoisting"
//if we declare variable with "var" keyword then "hoisting" will be there
// "Hoisting" means bringing the declaration on top

// ES6 does not have "hoisting", it has block scope

let y = 10; // scope of variable 'y' global.
function a() {
  let x = 10; // scope of variable 'x' limited to function a(). Variable 'x' is local to function a()
  y = y + 5;
}

function b() {
  console.log(x); // ReferenceError: x is not defined
  console.log(y);
}

a();
b();

console.log(c); // undefined
var c = 9;

//Block scope
// It is nothing but the brackets {}, an if condition, for loop, do while loop etc,
// that is a block created which creates seperate scope for declarations existing in that block
// Javascript compiler doesn't hoist variables declared with "let" keyword

let d = 9;
{
  let d = 8;
  console.log(d); //8
}
console.log(d); //9

console.log(e); // ReferenceError: Cannot access 'e' before initialization
let e;
