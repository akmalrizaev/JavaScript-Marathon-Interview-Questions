// Javascript gives us a way where we can create a module, which we can export or import
// as per our requirement
// With javascript ES6 version, there are 2 important statements, "export" & "import"

// Normally when we are working with frameworks like React/Angular, we do use "import" or "export"
// directly, because there is a development server running (thanks to webpack like build tools)
// It's not that easy with core javascript

export function calc() {
  console.log('Module code executed');
}

{
  /* <script type="module">import {calc} from './calc.js'; calc();</script>; */
}
