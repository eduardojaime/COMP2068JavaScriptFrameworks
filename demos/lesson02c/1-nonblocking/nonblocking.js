// This is the asynchronous (non-blocking) version of the program
// In this version, we use the asynchronous version of the read file method
// and instead of storing the values in a variable, we will use 'callback' functions to tell the program what to do with the data once it is available
// Import the fs module
const fs = require("fs");
// Read the larger file (food.txt) asynchronously AND pass a callback function to handle outputting the data
console.log("Food data source contents:");
fs.readFile("food.txt", "utf8", (err, data) => {
    // This callback function is invoked once the reading operation is complete
    // all contents of the file will be stored in the 'data' variable
    console.log(data);
});
// Read the smaller file (drinks.txt) asynchronously AND pass a callback function to handle outputting the data
console.log("Drink data source contents:");
fs.readFile("drinks.txt", "utf8", (err, data) => {
    // This callback function is invoked once the reading operation is complete
    // all contents of the file will be stored in the 'data' variable
    console.log(data);
});

// What would the expected output be?
// msg line 7 > food.txt > msg line 14 > drinks.txt
// Actual: line 7 > line 14 > food.txt > drinks.txt
// Async programming does not guarantee order of execution
// When to use in real world? 
// When you have a large number of operations that can be done in parallel
// When you have operations that are not dependent on each other
// When you don't care about the order of execution and want to optimize performance