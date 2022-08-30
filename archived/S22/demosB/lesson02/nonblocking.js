// reading a file in a nonblocking way
const fs = require('fs');

// read food and show
fs.readFile('food.txt', 'utf-8', (error, food) => {
    // in async calls, code has to be inside the callback function
    console.log(food);
});

console.log('We ate all this food for lunch!');

// read drinks and show
fs.readFile('drinks.txt', 'utf-8', (error, drinks) => {
    console.log(drinks);
});

console.log('We drank all this stuff at lunch!');
// MIXED
// we ate, we drank, mixed list 