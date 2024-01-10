// How to handle timer based evants

// To handle timer based events there are two methods globally available:
// - setTimeout()
// - setInterval()
// setTimeout() & setInterval() are part of the "window" object
// setTimeout() executes only one after a given number of intervals
// setInterval() keeps on executing
// clearInterval() method is used to stop the timer

// setTimeout(functionName, milliseconds)

// <!DOCTYPE html>
// <html>
//     <head>

//     </head>
//     <body>
//         <h1 id="text">Waiting...</h1>
//         <button onclick="tryTimer()">Start Timer</button>
//         <script>
//             function tryTimer(){
//                 setTimeout(test,2000);
//             }
//             function test(){
//                 document.getElementById("text").innerHTML="Timed out...";
//             }
//         </script>
//     </body>
//     </html>

// setInterval(functionName, milliseconds)

// <!DOCTYPE html>
// <html>
//     <head>

//     </head>
//     <body>
//         <h1 id="text">Waiting...</h1>
//         <button onclick="tryTimer()">Start Timer</button>
//         <button onclick="stopTimer()">Stop Timer</button>
//         <script>
//             let cnt=0;
//             let tObj;
//             function tryTimer(){
//                 tObj = setInterval(()=>{
//                         document.getElementById("text").innerHTML=new Date;
//                         cnt++;
//                     },1000);
//                 }
//             function stopTimer(){
//                 clearInterval(tObj);
//             }
//         </script>
//     </body>
//     </html>
