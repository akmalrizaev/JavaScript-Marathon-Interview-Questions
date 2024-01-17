// There are 2 ways of using export & import for a module in javascript:
// 1. Named Export/Import
// 2 Default Export/Import

export function sum(a, b) {
  return a + b;
}

export function cube(a) {
  return a * a * a;
}
// --------
function sum1(a, b) {
  return a + b;
}

function cube1(a) {
  return a * a * a;
}
export { sum1, cube1 };
// --------------------------

function sum2(a, b) {
  return a + b;
}

function cube2(a) {
  return a * a * a;
}
export { sum2 as total, cube2 };

// ----------------------

{
  /* <script type="module">
	import {sum, cube} from './calc.js'
	// console.log(sum(4,5));
	// console.log(cube(3));
</script> */
}

// --------------------------------------------

// import * as <obj> from <filename>

/* <script type="module">
	import * as calc from './calc.js'
	// console.log(calc.sum(4,5));
	// console.log(calc.cube(3));
</script> */

// In modern build tools like webpack, if some imported modules are not used
// then those modules get removed i.e. Tree shaking
