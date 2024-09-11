// this file demonstrates non-blocking (asynchronous) coding
// non-blocking code depends on callback functions to handle the results of asynchronous operations
// such as reading a file or accessing a database
// import fs module so we can read text files
const fs = require("fs"); // this is a built-in module
// call readFile method to read the larger file
// pass a callback function as the third parameter to handle the results of the asynchronous operation
// in this case the callback function takes two parameters: error and data
// print out the contents of the larger file
fs.readFile("food.txt", "utf8", (error, data) => {
    // this code is executed only when the readFile operation is complete
    console.log(data);
});
// print a message to the console
console.log("Food.txt read successfully");
// call readFile method to read the smaller file
// pass a callback function as the third parameter to handle the results of the asynchronous operation
// print out the contents of the smaller file
fs.readFile("drinks.txt", "utf8", (error, data) => {
    // this code is executed only when the readFile operation is complete
    console.log(data);
});
// print a message to the console
console.log("Drinks.txt read successfully");
// what will the output be? success, success, food, drinks