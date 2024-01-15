// async/await is an easier way to deal with Promises
// Promise was an easier way to callback, but async/await is even easy to deal with asynchronous process
// async/await handles promises, but with simple syntax

// By writing async function
// - We do nit nedd to write a "return" statement
// - To return a "rejected" state, throw statement is written to reject a Promise

async function test() {
  return 0;
}
const fn = test();
console.log(fn);

// -----------------------------------

async function test1() {
  throw new Error('Err Found');
}
const fn1 = test1();
console.log(fn1);

// ---------------------------------------------

//  await makes sure to wait till a "Promise" is settled, be it resolved or rejected
// The way we write then() for handling the Promise so far, now we have "await";
// we can remove then() & replace it with "await"

// await is used with asynchronous function only
// Asynchronous written before a function, that means function is returning Promise only

const cSqr = (a) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a * a);
    }, 2000);
  });
};
(async function () {
  let res = await cSqr(2);
  console.log(res);
})();
