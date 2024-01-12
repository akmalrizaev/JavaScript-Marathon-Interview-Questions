// There are 3 main events which are directly related to keyboard:
// keydown
// keypress   //This event is not used nowadays
// keyup

// When we press the key, it is the keydown event  & it has a property called event.repeat
// which is set to true when an event is getting repeated

// The keypress event doesn't give us the key values

// To try combination of keys:
// if (event.altKey && event.code === KeyA) {
// statements
// }

// <!DOCTYPE html>
// <html>
//     <head>
//     <style>
//         div{
//             width: 300px;
//             height: 200px;
//             display: inline-block;
//             padding:20px;
//             background-color: blue;
//             color: white;
//             font-size: 30px;
//             text-align: center;
//         }
//     </style>
//     </head>
//     <body>
//         <div id="divE">
//             <h1 id="msg">No events</h1>
//             <input type="text"
//             onkeyup="eHandler('Keyup')"
//             onkeydown="eHandler('Keydown')"/>
//             <input type="text" onkeypress="eHandler('Keypressed')"/>
//         </div>
//     <script>
//      function eHandler(msg){
//        document.getElementById("msg").innerHTML = msg;
//      }
//     </script>
//     </body>
// </html>

// ----------------------------------

// <!DOCTYPE html>
// <html>
//     <head>
//     <style>
//         div{
//             width: 500px;
//             height: 300px;
//             display: inline-block;
//             padding:20px;
//             background-color: blue;
//             color: white;
//             font-size: 20px;
//             text-align: center;
//         }
//     </style>
//     </head>
//     <body>
//         <div id="divE">
//             <h1 id="msg">No events</h1>
//             <input type="text"
//             onkeydown="eHandler()"/>
//         </div>
//     <script>
//      function eHandler(){
//          let msg=event.code + '<br/>' + event.key;
//        document.getElementById("msg").innerHTML = msg;
//      }
//     </script>
//     </body>
// </html>
