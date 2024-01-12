// It is common practice that we have cut, paste & copy actions
// for any textboxes

// We can cancel only those events which are cancelable

// <!DOCTYPE html>
// <html>
//     <head>
//     <style>
//         div{
//             width: 500px;
//             height: 300px;
//             display: inline-block;
//             padding:20px;
//             background-color:lightskyblue;
//             color: white;
//             font-size: 20px;
//             text-align: center;
//             margin-left: 300px;
//             margin-top: 200px;
//         }
//         input,select{
//             font-size: 25px;
//             margin: 10px;
//         }
//     </style>
//     </head>
//     <body>
//         <div id="divE">
//             <h1 id="msg"> Event Status</h1>
//             <input type="text"
//             oncut="eHandler('Oncut')"
//             oncopy="eHandler('Oncopy')"
//             onpaste="eHandler('Onpaste')"><br/>
//         </div>
//     <script>
//      function eHandler(msg){
//        document.getElementById("msg").innerHTML = msg;
//      }
//     </script>
//     </body>
// </html>

// -------------------------------------------------------------------

// <!DOCTYPE html>
// <html>
//     <head>
//     <style>
//         div{
//             width: 500px;
//             height: 300px;
//             display: inline-block;
//             padding:20px;
//             background-color:lightskyblue;
//             color: white;
//             font-size: 20px;
//             text-align: center;
//             margin-left: 300px;
//             margin-top: 200px;
//         }
//         input,select{
//             font-size: 25px;
//             margin: 10px;
//         }
//     </style>
//     </head>
//     <body>
//         <div id="divE">
//             <h1 id="msg"> Event Status</h1>
//             <input type="text"
//             oncut="return false"
//             oncopy="eHandler('Oncopy')"
//             onpaste=event.preventDefault()><br/>
//         </div>
//     <script>
//      function eHandler(msg){
//        document.getElementById("msg").innerHTML = msg;
//      }
//     </script>
//     </body>
// </html>
