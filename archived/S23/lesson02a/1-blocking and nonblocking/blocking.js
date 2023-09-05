// Blocking is also referred to as Synchronous code
// The code here accesses an external data source (file) and waits until access is complete
// in order to continue
// import the fs module to read the external files
const fs = require('fs'); // object with the same name as module

// read both files, one at a time, and output the contents
// use synchronous version of ReadFile()
let food = fs.readFileSync('food.txt', 'utf-8');
console.log(food);

console.log('All that food was delicious!'); // just print something else

let drinks = fs.readFileSync('drinks.txt', 'utf-8');
console.log(drinks);

console.log('We had all these at lunch!');

// Output order???
// food list > 1st message > drinks list > 2nd message
// guaranteed execution order