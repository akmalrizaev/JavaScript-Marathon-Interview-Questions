// What is event bubbling event capturing

// event.target returns the reference of element which raised the event

// A bubble has a tendency to go up from the bottom, that's why
// we say it as "Event Bubbling"

// The default path of "Event Propagation" is "bottom to top"
// In case if we want to stop the default propagation i.e, "bootom to top"
// event.stopPropagation();

// <!DOCTYPE html>
// <html>
//     <head>
//         <style>
//             div{
//                 width:50%;
//                 height:100px;
//                 border: 1px solid darkslategray;
//                 text-align: center;
//                 padding:50px;
//                 margin: auto;
//             }
//         </style>
//     </head>
//     <body>
//         <div onclick="divClick()">
//             <button onclick="btnClick()">Click Me!</button>
//         </div>
//         <script>
//             function divClick(){
//                 alert("Division clicked");
//             }
//             function btnClick(){
//                event.stopPropagation();
//                 alert("Button clicked");
//             }
//         </script>
//     </body>
// </html>

// In case if you want to change this default propagation path i.e,
// instead of bottom to top we make it top to bottom, then that
// will be called "capturing"
// For "capture" phase you have to use addEventListener() method
// to configure or bind the event

// <!DOCTYPE html>
// <html>
//     <head>
//         <style>
//             div{
//                 width:50%;
//                 height:100px;
//                 border: 1px solid darkslategray;
//                 text-align: center;
//                 padding:50px;
//                 margin: auto;
//             }
//         </style>
//     </head>
//     <body>
//         <div id="div1">
//             <button id="btn1" >Click Me!</button>
//         </div>
//         <script>
//             const btn1 = document.getElementById("btn1");
//             const div1 = document.getElementById("div1");
//             window.onload = function(){
//                 btn1.addEventListener("click",btnClick,true);
//                 div1.addEventListener("click",divClick,true)
//             }
//             function divClick(){
//                 alert("Division clicked");
//             }
//             function btnClick(){

//                 alert("Button clicked");
//             }
//         </script>
//     </body>
// </html>

// There are few events which do not get propagated like focus events
