// use built in fs module
const fs = require('fs');

// use the blocking version of the readFile method
console.log('About to read 1B lines. Feel free to get some coffee/tea/snacks while you wait!');

// I'm ready to read 1,000,000,000 elements...
let breakfast = fs.readFileSync('breakfast.txt', 'utf-8');

console.log(breakfast);

console.log('Finished reading breakfast.txt');

let drinks = fs.readFileSync('drinks.txt', 'utf-8');

console.log(drinks);

console.log('Finished reading drinks.txt');