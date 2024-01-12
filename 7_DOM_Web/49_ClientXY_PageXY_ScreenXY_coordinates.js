// With MouseEvent, there are various properties of event object which give us X & Y
// position/coordinates of the mouse.
// They can be used in different contexts as per requirement & these properties are:
// clientX, clientY
// pageX, pageY
// screenX, screenY

// screenX/Y represents the entire screen size of device
// clientX/Y is relative to the current window
// pageX/Y is relative to the document/page

// <!DOCTYPE html>
// <html>
//     <head>

//     <style>
//         div{
//             width: 300px;
//             height: 90px;
//             display: inline-block;
//             padding:20px;
//             background-color: blue;
//             color: white;
//             font-size: 30px;
//             text-align: center;
//             margin-top: 20px;
//         }
//         #main{
//             height: 500px;
//             width: 300px;
//             background-color: cornflowerblue;
//         }
//     </style>
//     </head>
//     <body onmousemove="eHandler()">

//         <div id="divE">X Y Display</div><br/>
//         <div id="main"></div>

//     <script>
//      function eHandler(){
//         let msg='';
//         msg="client-X:" + event.clientX + ",Y:" + event.clientY;
//         msg=msg + "\npage-X:" + event.pageX + ",Y:" + event.pageY;
//         msg=msg + "\nscreen-X:" + event.screenX + ",Y:" + event.screenY;

//         document.getElementById("divE").innerHTML = msg;

//      }

//     </script>
//     </body>
// </html>
