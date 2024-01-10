// getElementBy() - id, tags, class & name

// getElementById() is one of the method which you use to get
// a specific element only
// getElementById() is a kind of method which can work with the
// Document Object (DOM)
// getElementById() method is always applied with document

// getElementsByTagName(tag)
// getElementsByClassName(className)
// getElementsByName(name)

// <!DOCTYPE html>
// <html>
//     <body>
//         <div id="test">
//             <p name="para">First</p>
//             <p name="para">Second</p>
//             <p class="a">Third</p>
//             <h3 class="a">H31</h3>
//             <h3>H32</h3>
//        </div>
//        <div>
//             <p>Next division</p>
//         </div>
//         <button onclick="btnClicked()">Change Content</button>
//     </body>
//     <script>
//       function btnClicked(){
//         const tDiv = document.getElementById("test");
//         const elements = tDiv.getElementsByTagName("p");
//         console.log(elements);
//       }
//     </script>
// </html>
