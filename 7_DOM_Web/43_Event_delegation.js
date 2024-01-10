// What is event delegation

// By default the events bubble up, it means that when an event is
// triggered on an element, the same event is also triggered for that
// element's ancestors
// This very behavior allows one excellent event handler pattern
// called "Event Delegation"

// <!DOCTYPE html>
// <html>
//     <head>
//         <style>
//             table{
//                 width:50%;

//                 border: 1px solid darkslategray;
//                 text-align: center;
//                 padding:5px;
//                 margin: auto;
//             }
//             td{
//                 border: 1px solid darkgray;
//                 padding:10px;
//             }

//         </style>
//     </head>
//     <body>
//         <table onclick="mainClick()">
//             <tr>
//               <th>Code</th>
//               <th>Product</th>
//               <th>Price</th>
//             </tr>
//             <tr>
//                 <td>1001</td>
//                 <td>Apple</td>
//                 <td>$20</td>
//               </tr>
//               <tr>
//                 <td>1002</td>
//                 <td>Orange</td>
//                 <td>$10</td>
//               </tr>
//               <tr>
//                 <td>1003</td>
//                 <td>Banana</td>
//                 <td><input type="text"/></td>
//               </tr>
//                 </table>
//         <script>
//             function mainClick(){
//                  if (event.target.tagName==='TD'){
//                     console.log(event.target.innerHTML);

//                 }
//                  else{
//                     console.log(event.target.value);
//                 }
//             }
//         </script>
//     </body>
// </html>
