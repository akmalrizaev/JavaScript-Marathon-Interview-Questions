// Callback functions are used when there is an asynchronous process
// When there are multi-level functions, it's a hell of job & that's why
// it's called "callback hell" or "pyramid of doom"
// To avoid the callback hell "Promise" object is invented
// Promise object is a better way to write callback processes & the best
// way to know this is by converting or rather refactoring code of callback
// function with a promise

let pr = new Promise((resolve, reject) => {
  resolve('abc');
});
console.log(pr);
// ---------------------------------------------------

let pr1 = new Promise((resolve, reject) => {
  resolve('Data Retrieved');
  reject('Call Failure');
});

pr1
  .then((msg) => {
    console.log('Success-' + msg);
  })
  .catch((err) => {
    console.log('Error-' + err); //err.message
  })
  .finally(() => {
    console.log('Finishing process');
  });

//   ---------------------------------------------------------------------

function fetchData() {
  const pr2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      let data = { pCode: 1001, pName: 'Orange' };
      resolve(data);
    }, 2000);
  });
  return pr2;
}

console.log('Program starts here....');
fetchData()
  .then((data) => {
    console.log(data);
    console.log('Program ends here....');
  })
  .catch((err) => {
    console.log('Error-' + err);
  });

//   --------------------------------------------------------------------

const cSqr = (n) => {
  return new Promise((resolve, request) => {
    setTimeout(() => {
      resolve(n * n);
    }, 2000);
  });
};
cSqr(2)
  .then((res) => {
    console.log(res);
    cSqr(res)
      .then((res1) => {
        console.log(res1);
      })
      .catch((err) => {
        console.log('Error' + err);
      });
  })
  .catch((err) => {
    console.log('Error' + err);
  });

//   -------------------------------------------------------------------------------------------------------

const cSqr1 = (n) => {
  return new Promise((resolve, request) => {
    setTimeout(() => {
      resolve(n * n);
    }, 2000);
  });
};
cSqr1(2)
  .then((res) => {
    console.log(res);
    return cSqr1(res);
  })
  .then((res1) => {
    console.log(res1);
  })
  .catch((err) => {
    console.log('Error' + err);
  });

//   -------------------------------------------------------------------------------------

const pr3 = new Promise((resolve, reject) => {
  resolve('Over');
  setTimeout(() => {
    resolve('Again');
  }, 2000);
});
pr3
  .then((msg) => {
    console.log(msg);
    return pr3;
  })
  .then((msg) => {
    console.log(msg);
  });
