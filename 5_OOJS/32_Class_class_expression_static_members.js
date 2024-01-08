// Classes are very commonly used in various languages
// The whole concept of class is to create a blueprint or design or
// commonly referred as the "prototype"
// In ES6 we have a "class" keyword to create a class whereas,
// in ES5 we were using a constructor function
// "constructor" is a method which is executed immediately you create the instance of a class
// We don't need to have an instance of a class to refer a static member

class House {
  constructor(nDoors, windows) {
    console.log('Constructor called');
    this.nDoors = nDoors;
    this.windows = windows;
  }
  showData() {
    console.log(this.nDoors, this.windows);
  }
  static appVersion = 1.2;
  static test() {
    console.log('static method called');
  }
}
const obj = new House(5, 10); // Constructor called
const obj1 = new House(7, 12); // Constructor called
obj.showData(); // 5 10
obj1.showData(); // 7 12
House.test(); // static method called
console.log(House.appVersion); // 1.2
