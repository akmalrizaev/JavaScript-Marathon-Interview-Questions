// AJAX or also called as AJAX call, we can fetch the from the server & display
// without refreshing the entire page
// AJAX is about making an HTTP call to the Webservice, API or REST API & that too without refreshing
// the entire page
// Javascript gives the "Fetch API" nowadays to make an AJAX call

// XMLHttpRequest Object is often referred to as "XHR"

// XMLHttpRequest.open(method, URL, [async, user, password])
// "method" argument is any HTTP request method like: -
// "GET" to get or fetch the data
// "POST" to add or insert data
// "PUT" to edit the data
// "DELETE" to delete data

// XMLHttpRequest.send([body])

// "load" - is fired when the XHR transaction completes successfully

// "response" property contains the body content of the response which is resieved

// "onprogress" - is fired continuously when a request receives data

// "onerror" - is fired when there is an error encountered while requesting

// "onreadystatechange" is fired when a property called "readyState" changes

let request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/comments');

request.send();
request.onload = function () {
  if (request.status === 200) {
    console.log(request.response);
  } else {
    console.log('Invalid request...');
  }
};
