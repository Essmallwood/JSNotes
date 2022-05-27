const createNode = (elem) => {
    return document.createElement(elem);
};

// append an element to parent
const appendNode = (parent, elem) => {
    parent.appendChild(elem);
}

// List Element
const ul = document.querySelector('#posts');

// GitHub API URL
const url = 'https://jsonplaceholder.typicode.com/posts';

// make the API call
fetch(url)
    .then(res => res.json())
    .then(data => {
        // iterate over users
        data.map((posts) => {
            // create the elements
         console.log(posts);
         
            
        });
    }).catch(err => {
        console.error('Error: ', err);
    });

console.log("hey");

    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))