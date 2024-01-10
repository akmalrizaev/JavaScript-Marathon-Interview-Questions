// How can we navigate through DOM

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
console.log(document.body.childNodes);
console.log(document.body.children);

// The document has several properties like,
// - We can navigate upwards
// - We can navigate downwards
// - We can navigate side ways

// Children of body
// The child which is inside division "<div>", is not the direct
// child of the document
// To access the child node you can use "firstChild", "firstElementChild",
// "lastChild" & "lastElementChild" properties of any DOM tree node
// We can use "nodeType", "nodeName" & various other properties

function btnClick() {
  const div1 = document.getElementById('div1');
  console.log(div1.firstElementChild);
}

// For accessing siblings we have "nextSibling", "nextElementSibling",
// "previousSibling" & "previousElementSibling"

// To access the parent nodes we have properties like
// "parentNode" or "parentElement"

// <!DOCTYPE html>
// <html>
//     <head>
//         <title>DOM Navigation</title>
//         <style>
//             div{
//                 width:300px;
//                 height: 300px;
//                 border: 1px solid darkslategray;
//                 text-align: center;
//                 padding:5px;
//                 margin: 10px;
//                 display: inline-block;

//             }
//         </style>
//     </head>
//     <body>
//         <div id="div1">
//             <h1>First division</h1>
//             <ul>
//                 <li>First Item</li>
//                 <li>Second Item</li>
//             </ul>
//         </div>
//         <div>
//             <h1>Second division</h1>
//             <input type="text"/><br/>
//             <button onclick="btnClick()">Click Me!</button>
//         </div>
//         <script>
//             function btnClick(){
//                 const div1 = document.getElementById("div1");
//                 console.log(div1.parentNode);
//                 console.log(div1.parentElement);
//             }
//         </script>
//     </body>
// </html>
