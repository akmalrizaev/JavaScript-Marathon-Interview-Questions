// The "this" object is a common object used at many places in day to day programming
// The definition of "this" object is - that it contains the current context
// "this" can have different values depending on where it is placed
// "window" is the global object in the browser
// "this" object does not work with arrow function

console.log(this); // {}, Window

const obj = {
  test() {
    console.log(this); // { test: [Function: test] }
  },
  test2: () => {
    console.log(this); // {}, Window
  },
};
obj.test();
obj.test2();
