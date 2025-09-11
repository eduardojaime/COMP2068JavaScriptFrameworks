// This is a simple console app that reads the contents of the files and prints them to the terminal
// It uses the built-in fs module to read the files
// It implements asynchronous (non-blocking) programming
// Import fs module
const fs = require("fs");
// Read contents of food.txt and print them via anonymous callback method
fs.readFile("food.txt", "utf8", (error, data) => {
    // this function is called when the file operation is done and the contents of the file are ready
    console.log(data); // 3 or 4??
});
// Print a success message
console.log("food.txt read successfully"); // 1

// Read contents of drinks.txt and print them via anonymous callback method
fs.readFile("drinks.txt", "utf8", (error, data) => {
    console.log(data); // 3 or 4??
});

// Print a success message
console.log("drinks.txt read successfully"); // 2

// Things to remember:
// Async operations do not guarantee order of execution or output
// If your program logic requires this then use sync operations
