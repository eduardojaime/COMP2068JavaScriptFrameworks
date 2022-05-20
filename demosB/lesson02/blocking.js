// reading a file in a blocking way
const fs = require('fs'); // FS is a Node Core module that allows you to read files
// read file into an object
let food = fs.readFileSync('food.txt', 'utf-8');
// print list to the console
console.log(food);

console.log('We ate all these items!');

// read file into an object
let drinks = fs.readFileSync('drinks.txt', 'utf-8');
// print list to the console
console.log(drinks);

console.log('We drank all this stuff for dinner!');
// output >> foods, we ate, drinks, we drank