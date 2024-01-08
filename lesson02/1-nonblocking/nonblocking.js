const fs = require('fs');

// we'll use the asynchronous version of the method
// by default methods are asynchronous in node
// this methods needs a third parameter: a callback function that will execute when fs is done reading the file
// this callback function needs two parameters: error and the contents of the file
fs.readFile('food.txt', 'utf-8', (error, food) => {
    console.log(food);
});

console.log('We ate all this stuff for breakfast');

// what do you think the output will be if we run this?
// why does line 11 get printed before food?

// the program is not waiting for the reading function to finish before it continues
// reading a file takes longer than printing a message
fs.readFile('drinks.txt', 'utf-8', (error, drinks) => {
    console.log(drinks);
});

console.log('We drank all this stuff for breakfast');

// can you predict what the output will be? which messages will be shown first