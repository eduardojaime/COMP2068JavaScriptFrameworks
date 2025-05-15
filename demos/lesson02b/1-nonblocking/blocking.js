// This is a program written with blocking behaviour
// Each read operation will block the program until the data is available
// This is a simple example of blocking I/O in Node.js
// We'll use the fs core module to read the files synchronously
const fs = require('fs');
// Read the contents of the first file synchronously and store them in a variable
let food = fs.readFileSync('food.txt', 'utf8');
// Print the contents of the first file to the console
console.log(food); // 1
// Print an additional message to the console
console.log('This food was delicious!'); // 2
// Do the same for the second file
let drinks = fs.readFileSync('drinks.txt', 'utf8');
console.log(drinks); // 3
console.log('These drinks were refreshing!'); // 4
// What is the output of this program? >> 1 2 3 4
// Output and execution order is guaranteed