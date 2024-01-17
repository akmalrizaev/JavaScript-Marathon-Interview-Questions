// Default export means, there will be one module per file
// Generally, we see this approach in frameworks where one function or class is exported
// In other words, we export one container which has many things inside it & we import
// that one module only

// sum.js
// export default function sum(a,b) {
// 	return a + b;
// }

// cube.js
// export default function cube(a) {
// 	return a*a*a;
// }

{
  /* <script type="module">
	import sum from './sum.js';
	import cube from './cube.js';
	console.log(sum(9,5));
	console.log(cube(3));
</script> */
}

// function total(a,b) {
// 	return a + b;
// }

// export default total;
