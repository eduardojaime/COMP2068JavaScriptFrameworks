// import fs module so we can read text files
const fs = require('fs'); // built-in fs node module > file system

// read contents of file and put them in an object
// using readFileSync > synchronous version of readFile method
let meals = fs.readFileSync('meals.txt', 'utf-8');
// print list
console.log(meals);
console.log('We ate all this stuff!');

let drinks = fs.readFileSync('drinks.txt', 'utf-8');
console.log(drinks);
console.log('We drank all this stuff for breakfast!');

// synchronous programming
// what will the output look like?
