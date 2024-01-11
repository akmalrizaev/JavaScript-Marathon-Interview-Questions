// There is a lot you need to know about event handling like the Event object,
// Mouse & Keyboard events events, other DOM events or even creating & dispatching custom events
// Events are varios types of actions on which you can run our desired code
// The Event object is the parent object of all event objects
// Event objects like MouseEvent, KeyboardEvent, FocusEvent, TouchEvent, UiEvent etc.

// <!DOCTYPE html>
// <html>
//     <head>
//     <style>
//         button{
//             padding:20px;
//             margin-top: 100px;
//             margin-right: 20px;
//             margin-left: 20px;
//             background-color: blue;
//             color: white;
//             font-size: 30px;
//         }
//     </style>
//     </head>
//     <body>
//         <button onclick="alert('Not an ideal way')">The inlineway</button>
//         <button onclick="showMsg()">Common way</button>
//         <button id="btn">Binding Event Later</button>
//         <button id="btn1">Binding with Listener</button>
//     <script>
//         const btn = document.getElementById("btn");
//             btn.onclick = function(){
//                 alert("Attaching event later");
//             }
//         const btn1 = document.getElementById("btn1");
//         btn1.addEventListener("click",btn1Clicked);
//         function showMsg(event){
//             alert("Most common way");
//         }
//         function btn1Clicked(){
//             alert("Add event listener called me!");
//         }
//     </script>
//     </body>
// </html>
