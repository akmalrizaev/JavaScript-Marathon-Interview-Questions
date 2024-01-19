// Debouncing is good to have when we implement search-like functionality or autocomplete feture
// while typing - especially when the search is making API calls on the server

// <!DOCTYPE html>
// <html lang="en">
// <head>
//    <style>
//       input{
//           font-size: 20px;
//       }
//    </style>
// </head>
// <body>
//    <input type="text" oninput="search()">
//    <h2 id="kC">Key Count:0</h2>
//    <h2 id="aC">API Count:0</h2>
//    <script>

//        let keyCount=0;
//        let APICount=0;
//        let dTimer;
//        function search(){
//            keyCount++;
//            window.clearTimeout(dTimer);
//              dTimer =  window.setTimeout(function(){
//                 APICount++;
//              },200);
//            document.getElementById("kC").innerHTML="Key Count:" + keyCount;
//            document.getElementById("aC").innerHTML="API Count:" + APICount;
//         }
//    </script>
// </body>
// </html>
