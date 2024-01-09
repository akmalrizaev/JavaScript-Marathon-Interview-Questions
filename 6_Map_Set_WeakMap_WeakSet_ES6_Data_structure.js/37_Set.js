// Set collection or data structure does not have keys,
// it has only values and that too unique values
// So if you add the same or duplicate value, it is ignored
//  It means you will have unique or non repeating values only.
// To add values to a Set, we can use add(), it also has "size" property
// to check count of values

let names = new Set();
names.add('First');
names.add('Second');
names.add('Third');
names.add('First');
console.log(names); // Set(3) { 'First', 'Second', 'Third' }

let names2 = new Set(['First', 'Second', 'Third']);
console.log(names2); // Set(3) { 'First', 'Second', 'Third' }

// Set is iterable, so you can put a for...of directly on the Set collection
// forEach() can also be used to loop through collection
for (let v of names) {
  console.log(v);
}

// values(), keys() & entries() methods are not needed, but just to make it compitable
// with map() method we see these methods applied with set() as well

// For removal of values Set has following methods:
// delete() - which takes values to be removed
// clear() - which completely removes values

console.log(names); // Set(3) { 'First', 'Second', 'Third' }
names.delete('First');
console.log(names); // Set(2) { 'Second', 'Third' }
names.clear();
console.log(names); // Set(0) {}
