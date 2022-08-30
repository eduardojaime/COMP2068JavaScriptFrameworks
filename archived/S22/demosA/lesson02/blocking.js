// import fs module to read files
const fs = require('fs'); // built-in Node module

// read both files and printing messages to the console in between
//read food
// readFileSync accepts filename and encoding
let food = fs.readFileSync('food.txt', 'utf-8');
//print
console.log(food);

console.log('We ate all that stuff for breakfast!');

//read drinks
let drinks = fs.readFileSync('drinks.txt', 'utf-8');
// print
console.log(drinks);

console.log('We drank all that stuff for lunch!');

// Output >> List of food, we ate..., drinks, we drank...