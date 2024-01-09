// Any programming language has various data structures
// In Javascript we have "Arrays" and "Object Literals" wich are very powerful and
// commonly used data structures
// In ES6 there are few more data structures introduced
// Map, WeakMap, Set, WeakSet

// Map
// Map is the collection or data structure where you are mappng value to value
// size property - returns the count of key value pair
let product = new Map();
product.set('pCode', '1001');
product.set(1, 'Apple');
product.set(true, 'Available');
console.log(product); // Map(3) { 'pCode' => '1001', 1 => 'Apple', true => 'Available' }
console.log(product.get(1)); // Apple
console.log(product.size); // 3
product['price'] = 300; // Incorrect way as it work as a normal key of object literal instead of data typed Map key. So better use set() method
console.log(product);

// Map is iterable
// We can loop through the map collection
// values(), keys(), entries()
// values() helps to loop through all the values of map
for (let v of product.values()) {
  console.log(v); // 1001, Apple, Available
}

// entries() is the method which returns both key and value
for (let [k, v] of product.entries()) {
  console.log(`${k} - ${v}`); // pCode - 1001, 1 - Apple, true - Available
}

// Map.has(key) - checks whether the given key is existing in the map or not
console.log(product.has('pCode')); // true

//  delete() method removes values by key and clear() method wipes out everything from the Map
console.log(product);
product.delete('pName');
console.log(product);
