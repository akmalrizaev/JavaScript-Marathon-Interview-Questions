//  Iterables and Iterators

// The Iterator concept is newly introduced in ES6
// It's a kind of new mechanism to iterate
// or traverse through data structures
// Arrays, Strings, Maps, Sets etc. are iterable

let arr = [4, 5, 6, 7];
for (let i of arr) {
  console.log(i);
}

let arr2 = [4, 5, 6, 7];
let itr = arr2[Symbol.iterator]();
console.log(itr); // Object [Array Iterator] {}
console.log(itr.next()); // {value: 4, done: false}
console.log(itr.next()); // {value: 5, done: false}
console.log(itr.next()); // {value: 6, done: false}
console.log(itr.next()); // {value: 7, done: false}
console.log(itr.next()); // {value: undefined, done: true}

// When we want to make an object literal iterable it should have method having
// key value as Symbol.iterator
// The object literal should also have the next() method

let obj = {
  start: 10,
  end: 15,
};
obj[Symbol.iterator] = function () {
  const itr = {
    next() {
      if (obj.start <= obj.end) {
        return { value: obj.start++, done: false };
      } else {
        return { done: true };
      }
    },
  };
  return itr;
};
for (let i of obj) {
  console.log(i);
}
