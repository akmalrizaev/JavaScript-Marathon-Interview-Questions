// Inheritance, Subclassing and Extending built-in class

// Inheritance or subclassing is a very important concept and often used with object oriented patterns
// With ES5 there were different ways for inheritance, but in ES6 "extends" is the keyword to inherit a class
// Inheritance is needed when you have unique or common members
// How do we create or how do we extend the class
// "super" is the keyword which allows you to access parent class members
//  We can use "super" keyword to access the method as well
// super() - call parent constructor
// super.method() - call parent method
// super.property - access parent properties

class Parent {
  constructor(a) {
    this.a = a;
    console.log('Parent');
  }
  pMethod() {
    console.log('Parent method', this.a);
  }
}
class Childd extends Parent {
  constructor(a) {
    super(a);
  }
  childMethod() {
    super.pMethod();
  }
}
const objj = new Childd(55);
objj.pMethod(); // Parent method 55
objj.childMethod(); //Parent method 55

// ------------------
class Child extends String {
  noc(str) {
    console.log(str.length);
  }
}
const obj = new Child('Test string');
console.log(obj.toLowerCase()); // test string
obj.noc('new string here'); // 15
