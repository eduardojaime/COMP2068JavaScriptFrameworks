// This code will read the two files asynchronously
// The execution will not be blocked, so we need to provide 'callback' functions
// Using the same fs module, but calling async methods instead
const fs = require("fs");

// Read and print the contents of larger file
// No need to declare a variable to hold the contents but needs a callback function
fs.readFile("food.txt", "utf-8", (error, data) => {
    // this is an anonymous callback function
    // receives an error message and data (contents of the file)
    // if (error) { console.log(error); }
    console.log(data);
});

console.log("INFO: Done reading food.txt"); 

// Read and print the contents of the smaller file
fs.readFile("drinks.txt", "utf-8", (error, data) => {
    console.log(data);
});

console.log("INFO: Done reading drinks.txt");

// Output? INFO INFO FOOD DRINKS
// In async programming order of execution is not guaranteed
// sometimes drinks will be printed before food
// sometimes food will be printed before drinks
// it depends on how long it takes to read the files and execute the callback functions