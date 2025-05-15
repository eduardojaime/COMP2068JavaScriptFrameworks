// This is the asynchronous version of the code
// Note that node is asynchronous by default and its modules are also asynchronous
// We'll use the same fs module but will call the operations differently
const fs = require('fs');
// Use readFile instead of readFileSync and provide a callback function to handle the result of the operation
fs.readFile('food.txt', 'utf8', (error, data) => { // 1
    // usually you'll check for errors here
    // if there is an error, print it and return
    // skip and show the data
    console.log(data); // 2
});

// print an additional line to show that the program is still running
console.log('This food was delicious!'); // 3

// do the same with drinks
fs.readFile('drinks.txt', 'utf8', (error, data) => { // 4
    // usually you'll check for errors here
    // if there is an error, print it and return
    // skip and show the data
    console.log(data); // 5
});
// print an additional line to show that the program is still running
console.log('These drinks were refreshing!'); // 6

// What's the execution sequence? > ???
// What's the expected output? > 