// This file simulates reading data from a data source
// Data will be read synchronously, which means we will wait for each reading operation to complete
// This is the default behaviour in most programming languages: JAVA, C#...
// Import FS module, this is an out-of-the-box module in Node.js
const fs = require('fs'); 
// Read data from large file
let food = fs.readFileSync('food.txt', 'utf8');
// Print out data to terminal
console.log(food);
// Read data from smaller file
let drinks = fs.readFileSync('drinks.txt', 'utf8');
// Print out data to terminal
console.log(drinks);
// Note: In node.js packages, most methods are async by default
// you need to use the 'sync' version explicitly

// What will the output be?
// Since it's a synchronous operation, the output will be: food then drinks
// With synchronous operations we can guarantee the output order