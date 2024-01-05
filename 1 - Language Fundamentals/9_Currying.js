// Currying
// Curying is supported by many programming languages
// It's a unique way to call inner functions where we can pass arguments partially
// or pass multiple arguments in a function but 1 argument at a time.

const sum = function (a) {
  return function (b) {
    return a + b;
  };
};

const cl = sum(5);
const ans = cl(6);
console.log(ans); // 11

const ans2 = sum(5)(6);
console.log(ans2); // 11

// Arrow function
const sum2 = (a) => (b) => a + b;
const ans3 = sum2(5)(6);
console.log(ans3); // 11

const PriceCalc = (price) => {
  return (dPer) => {
    return price * dPer;
  };
};
const discountAmount = PriceCalc(300);
console.log(discountAmount(0.5));
console.log(discountAmount(0.3));
console.log(discountAmount(0.2));
