// WeakMap & WeakSet are 2 more data structures provided by ES6
// Map & Set hold the keys in a strong way, whereas WeakMap & WeakSet hold the keys weakly
// Keys in the WeakMap are only objects, we can not have primitive keys
// like string, number etc.
// Keys are weak or weakly held and it means if the keys are garbage collected, so do the values
// Because of weak keys - WeakMap collection does not have iterable methods like
// keys(), values() or entries()
// Weak Collections do not hold values when the garbage is collected -
// this is very handy with the DOM, where DOM nodes are removed
// the garbage collected locations will be free as they are not held strongly

// let product = new WeakMap();
// product.set('pCode', 1001); // TypeError: Invalid value used as weak map key
// console.log(product);

let product = new WeakMap();
let obj = {};
product.set(obj, 1001);
console.log(product.get(obj)); // 1001

// WeakSet is also a weakly held collection of objects and that too unique ones
// The behavior is the same as WeakMap - values are removed on Garbage Collection
// if there is no direct reference of the object

let product_set = new WeakSet();
let obj1 = {};
let obj2 = {};
let obj3 = {};
product_set.add(obj1, 1001);
product_set.add(obj2, 1002);
product_set.add(obj3, 1003);
console.log(product.has(obj1));
console.log(product.has(obj2));
console.log(product.has(obj3));

// These weak collections are also used, when we want to make sure that
// there is no memory leakages
// Whenever there is a garbage collection executed the lost references value are
// always cleared, from the collection also
// The newer browsers are far better when it comes to dealing with memory management
