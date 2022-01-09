const fs = require('fs');

let breakfast = fs.readFileSync('breakfast.txt', 'utf-8'); // this one should take longer to complete

console.log(breakfast);

console.log('Finished reading breakfast.txt');

let drinks = fs.readFileSync('drinks.txt', 'utf-8');

console.log(drinks);

console.log('Finished reading drinks.txt');