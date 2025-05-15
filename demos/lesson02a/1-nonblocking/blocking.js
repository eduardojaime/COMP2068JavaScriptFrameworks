// This is an example of blocking code (synchronous code)
// This program will read each file and print its contents
// We'll use the fs (filesystem) core module to do so
// Use the require function to load the fs module into the declared constant
const fs = require('fs');

// by default, node modules are asynchronous, use the sync version of the methods if available
let food = fs.readFileSync('food.txt', 'utf8'); // 1
console.log(food); // 2
// print an additional line to show that the program is still running
console.log('This food was delicious!'); // 3

// do the same with the drinks file
let drinks = fs.readFileSync('drinks.txt', 'utf8');  // 4
console.log(drinks); // 5
console.log('These drinks were refreshing!'); // 6

// What's the execution sequence?
// What's the expected output?
