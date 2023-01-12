// blocking code executes top to bottom and waits for operations to finish before continuing
// it's the traditional way of executing programs
// blocking is also called Synchronous
// import fs module to read text files
const fs = require('fs');
// read food into a variable (sync)
let food = fs.readFileSync('food.txt', 'utf-8'); // path-to-file, encoding
// print to console
console.log(food);

console.log('that\'s all we ate for breakfast!');

// read drinks into a variable
let drinks = fs.readFileSync('drinks.txt', 'utf-8');
// print to console
console.log(drinks);

console.log('that\'s all we drank during breakfast!');