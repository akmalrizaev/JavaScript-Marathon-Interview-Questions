// Callback functions nowadays are replayced with promises & async/await

//  Callback functions are used when there is an Asynchronous process

// A process which takes some time to execute is an Asynchronous process,
// i.e it won't execute immediately

// Syntax of callback function:
// fName(function(param1, param2, ...,paramN) {
// statements
// })

// ---------------------------------------------
let data;
function fetchData() {
  setTimeout(() => {
    data = { pCode: 1001, pName: 'Orange' };
  }, 2000);
}
function displayData() {
  console.log(data);
  console.log('Program ends here....');
}
console.log('Program starts here....');
fetchData();
displayData();
// ------------------------------------------------

let data1;
function fetchData(cb) {
  setTimeout(() => {
    data1 = { pCode: 1001, pName: 'Orange' };
    cb();
  }, 2000);
}

console.log('Program starts here....');
fetchData(function () {
  console.log(data1);
  console.log('Program ends here....');
});

// Callback Hell or Pyramid of Doom

// ---------------------------------------------------------------

function cSqr(n, cb) {
  setTimeout(() => {
    cb(n * n);
  }, 2000);
}

cSqr(2, function (res) {
  console.log(res);
  cSqr(res, function (res1) {
    console.log(res1);
  });
});

// --------------------------------------------------------------

// To write callback functions in better way we have "promises" in javascript
