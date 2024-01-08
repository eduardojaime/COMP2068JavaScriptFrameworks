// import fs module so we can read text files
const fs = require('fs');

// read two text files and output the contents
// readFileSync is the blocking version of this code
// it needs two parameters: file to read, and encoding
let food = fs.readFileSync('food.txt', 'utf-8');
// print list to the console
console.log(food);

console.log('We ate all this stuff for breakfast');

// run file to test

// now read the other file
let drinks = fs.readFileSync('drinks.txt', 'utf-8');
console.log(drinks);
console.log('We drank all this stuff for breakfast');

// What will the output look like? 
// What will the order of the outputs be?
// In this example our code executes in sequence and nothing happens until each line finishes
// Let's take a look at the non-blocking version