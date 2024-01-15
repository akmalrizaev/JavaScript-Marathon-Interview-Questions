// Promise.all()
// When we have multiple promises as input it should return a single promise
// after all promises are resolved, then you can use the all()

// Promise.all([p1,p2,p3,...,pn]).then(values) => {
// 	// statements
// }

// There can be any iterable object, but most of the time there is always an array
// which contains each promise reference
// all() method is settled with only resolved promises, so if any promise returns
// error then it won't work
// Promise.all() method will stop the execution if any promise returns error
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise1');
  }, 2000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise2');
  }, 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise3');
  }, 2000);
});
Promise.all([p1, p2, p3]).then((prMsgs) => {
  console.log(prMsgs);
});

// Promise.allSettled
// allSettled() method waits for all promises regardles of their state & returns Promise at the end
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise1');
  }, 2000);
});
const p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise2');
  }, 2000);
});
const p6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise3');
  }, 2000);
});
Promise.allSettled([p4, p5, p6])
  .then((prMsgs) => {
    console.log(prMsgs);
  })
  .catch((err) => {
    console.log('Error' + err);
  });

// Promise.race()
// race() method returns a promise as soon as any of the promise returns the state
// from the iterable list provided
// race() method it is going to race among each promise
const p7 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise1');
  }, 2000);
});
const p8 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise2');
  }, 2000);
});
const p9 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise3');
  }, 2000);
});
Promise.race([p7, p8, p9])
  .then((prMsgs) => {
    console.log(prMsgs);
  })
  .catch((err) => {
    console.log('Error' + err);
  });
