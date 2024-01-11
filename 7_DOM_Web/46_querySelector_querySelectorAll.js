// There is also querySelector methods which search using CSS selector
// There are 2 such methods commonly used & one must know as
// Javascript developer
// - querySelector()
// - querySelectorAll()
// The querySelector() method returns the first element that matches a
// specified CSS selector inside the method given as an argument
// it searches in the entire document
// Instead of the first element, if you want all the elements
// then you can use the querySelectorAll() method
// querySelector() and querySelectorAll() methods are useful - when you have
// to search through document and find the elements on the basis of CSS selector

// <!DOCTYPE html>
// <html>
//     <body>
//       <div>
//         <p>First</p>
//         <p>Second</p>
//         <p class="a">Third</p>
//         <h3 class="a">H31</h3>
//         <h3>H32</h3>
//    </div>
//    <div>
//      <p>Next division</p>
//    </div>
//   <button onclick="btnClicked()">Change Content</button>
//     </body>
//     <script>
//       function btnClicked(){
//         const elements = document.querySelector(".a");

//           console.log(elements);
//       }
//     </script>
// </html>
