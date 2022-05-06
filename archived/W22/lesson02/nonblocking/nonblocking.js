// import fs module so we can read text files
const fs = require('fs'); // built-in fs node module > file system

// read contents of file and put them in an object
// using readFile > asynchronous version of readFile method
// async programming needs callback functions
let meals = fs.readFile('meals.txt', 'utf-8', (err, data) => {
    console.log(data);
});
// print list
console.log('We ate all this stuff!');

let drinks = fs.readFile('drinks.txt', 'utf-8', (err, data) => {
    console.log(data);
});
console.log('We drank all this stuff for breakfast!');

// asynchronous programming
// what will the output look like?
