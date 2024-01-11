// MouseEvent
// Click, Double click and Right click event
// oncontextmenu event can be used to handle the Right click
// onmousedown Event & onmouseup Event
// The mousedown event fires when the user press the mouse button
// The onmouseup event occurs when a user releases a mouse button over an element
// The mouseover event occurs when a mouse pointer comes over an element,
// and mouseout - when it leaves
// when the mouse events are executed event object also gives coordinates

// <!DOCTYPE html>
// <html>
//     <head>

//     <style>
//         div{
//             width: 300px;
//             height: 60px;
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

//         <div id="divE"
//         onclick="eHandler('Click')"
//         oncontextmenu="eHandler('Right Click')"
//         ondblclick="eHandler('Double Click')">Click Events</div>

//     <script>
//      function eHandler(msg){
//          document.getElementById("divE").innerHTML = msg;
//      }

//     </script>
//     </body>
// </html>

// -------------------------------
{
  /* <body>
        <div id="divE" 
        onmousedown="eHandler('Mouse Down')"
        onmouseup="eHandler('Mouse Up')">Click Events</div>
    <script>
     function eHandler(msg){
         document.getElementById("divE").innerHTML = msg;
     }
    </script>    
    </body> */
}

// ----------------------------------------

{
  /* <body>
      
        <div id="divE" 
        onmouseout="eHandler('Mouse Out')"
        onmouseover="eHandler('Mouse Over')">Click Events</div>
      
       
    <script>
     function eHandler(msg){
         document.getElementById("divE").innerHTML = msg;
     }
 
       
 
    </script>    
    </body> */
}

// -------------------------------------------

{
  /* <body>
      
        <div id="divE" 
        
        onmouseup="eHandler()">Click Events</div>
      
       
    <script>
     function eHandler(){
        let msg='';
 
        if(event.altKey){
           msg=msg + "[Alter]";
        } 
        if(event.ctrlKey){
            msg=msg + "[Control]";
        } 
        if(event.shiftKey){
            msg=msg+ "[Shift]";
        }
        if(event.altKey && event.shiftKey){
            msg=msg+ "[Alt + Shift]";
        }
        document.getElementById("divE").innerHTML = msg;
       
     }
 
    </script>    
    </body> */
}
// ----------------------------------------------------------
