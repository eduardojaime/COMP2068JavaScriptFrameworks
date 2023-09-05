// example of blocking behaviour in the application
// blocking = synchronous 
// import fs module to access file system
// built-in module
const fs = require('fs');
// read from longer file first - food
let food = fs.readFileSync('food.txt', 'utf-8');
// print out contents
console.log(food);
console.log('What a delicious meal!');
// read from shorter file second - drinks
let drinks = fs.readFileSync('drinks.txt', 'utf-8');
// print out contents
console.log(drinks);
console.log('Such refreshing drinks!');

/// output order ????

// food list > delicious > drinks > refreshing
// guaranteed output order