// In the newer version of Javascript there is a better way to deal with the
// network requests i.e., fetch API
// The fetch API is a better, faster & more efficient way to deal with HTTP or network requests
// XMLHttpRequest - we were using before ES6
// Fetch API - ES6 onwards...

// const responsePromise = fetch(url, [optional object])

// The fetch API by default makes a GET request. In case if you want to make a POST request
// then the optional object parameter can be used.

async function fetchData() {
  let data;
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  console.log(response);
  if (response.ok) {
    data = await response.json(); //will do the parsing of response to json
  }
  console.log(data);
}
fetchData();

// -------------------------------------------------------
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((data) => console.log(data));

//   ------------------------------------------------------

let todo = {
  userId: 101,
  id: 1,
  title: 'New title',
  completed: false,
};
const response = fetch('https://jsonplaceholder.typicode.com/todos', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(todo),
}).then((res) => console.log(res));
