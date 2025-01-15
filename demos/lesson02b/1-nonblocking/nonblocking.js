// This is the asynchronous version of the code in blocking.js
// In this case we will use callback functions to handle the data reading
// when the operation completes
// Import FS module, this is an out-of-the-box module in Node.js
const fs = require('fs');
// Read data from large file
fs.readFile('food.txt', 'utf8', (err, data) => {
    // This is a callback function that will be executed
    // after the reading operation ends and 'data' is available
    // Print out data
    console.log(data);
});
// No access to data outside the callback function

// Read data from smaller file
fs.readFile('drinks.txt', 'utf8', (err, data) => {
    // Print out data
    console.log(data);
});

// If we run the code, what will the output be?
// same
// or drinks-food (sometimes)
// Async operations do not guarantee the order of execution
