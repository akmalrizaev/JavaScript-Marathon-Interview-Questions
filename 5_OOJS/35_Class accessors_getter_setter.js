// The accessors also known as getter or setter methods, is an approach
// to create a property to a class
// The get and set keywords are used to create a method which acts as a property
// The getter method is executed when you read/get the value
// The setter method is executed when you assign a value to that property

class Vehicle {
  // model is treated as a property because it is placed as getter&setter method
  get model() {
    console.log('Getter executed');
    return '';
  }
  set model(v) {
    console.log('Setter executed');
  }
}
const obj = new Vehicle();
obj.model = 'SUV'; // Setter executed
console.log(obj.model); //  Getter executed
