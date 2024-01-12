// Input Element Events

// Whenever we make a web application/page, we will always have different types
// of input elements like:
// textbox, checkbox, radio button ...

// onfocus - When an element receives focus or when cursor is placed
// on the element, onfocus event is fired for that element

// onblur - onblur is opposite to onfocus; when an element loses the focus,
// onblur event is fired

// <!DOCTYPE html>
// <html>
//     <head>

//     <style>
//         div{
//             width: 500px;
//             height: 200px;
//             display: inline-block;
//             padding:20px;
//             background-color:lightskyblue;
//             color: white;
//             font-size: 20px;
//             text-align: center;
//             margin-left: 300px;
//             margin-top: 200px;

//         }
//         input{
//             font-size: 25px;
//             margin: 10px;
//         }

//     </style>
//     </head>
//     <body>

//         <div id="divE">
//             <h1 id="msg"> Event Status</h1>
//             <input type="text"
//             onfocus="eHandler('On Focus')"
//             onblur="eHandler('On Blur')"/>
//             <input type="text"/>
//         </div>
//     <script>
//      function eHandler(msg){

//        document.getElementById("msg").innerHTML = msg;
//      }

//     </script>
//     </body>
// </html>
// -------------------------------------------------------------------------------------

// onchange - oninput
// onchange event is generally configured with drop down lists i.e,
{
  /* <select>
	<option>Text</option>
</select> */
}
// But it can be attached with textbox, checkbox or radio buttons
// For textbox the change event is fired when it loses the focus & also
// when there is a change in the content, which is very useful in case of validations
// onchange is fired when the focus is lost and at the same time
// the content is also changed
// onblur also gets fired on losing the focus; same as onchange but
// onchange is fired when there is also some changes done in the element.

// when a drop down list needs to be shown & when there is change in
// item - onchange will handle it

// oninput fires in all the cases when there is an input by any media

// onkeyup/onkeypress will not be fired when content is copy pasted
// by right click or voice input is added

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
//             <h1 id="msg">Event Status</h1>
//             <input type="text"
//             onfocus="eHandler('On Focus')""
//             onchange="eHandler('On Change')"/><br/>
//             Check Me!<input type="checkbox"                onchange="eHandler(this.checked)"/><br/>
//             Radio 1<input type="radio" value="Radio1" name="r"
//             onchange="eHandler(this.value+'-'+this.checked)"/>
//             Radio 2<input type="radio" value="Radio2" name="r"
//             onchange="eHandler(this.value+'-'+this.checked)"/></br>
//             <!-- <select onchange="eHandler(this.options[this.selectedIndex].text)">
//             -->

//             <select onchange="eHandler(this.value)">
//                 <option value="1"> List 1</option>
//                 <option value="2">List 2</option>
//                 <option value="3">List 3</option>
//                 <option value="4">List 4</option>
//             </select><br/>
//             <input type="text" oninput="eHandler(this.value)"/>
//         </div>
//     <script>
//      function eHandler(msg){

//        document.getElementById("msg").innerHTML = msg;
//      }

//     </script>
//     </body>
// </html>
