// nonblocking code will not wait for an operation to complete before continuing
// it will register a callback function to that operation
// when the operation is done, the callback function is called
// that way your program can continue working on other things
// import fs module
const fs = require('fs');
// read from food and print to console (larger)
// register a callback function to the readfile method
fs.readFile('food.txt', 'utf-8', (err, data) => {
    // assume there are no errors
    console.log(data);
});

console.log('That\'s all we ate!');

// read from drinks and print to console (smaller)
fs.readFile('drinks.txt', 'utf-8', (err, data) => {
    console.log(data);
});

console.log('That\'s all we drank!');