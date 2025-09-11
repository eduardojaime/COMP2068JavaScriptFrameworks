// This is a simple console app that reads the contents of the files and prints them to the terminal
// It uses the built-in fs module to read the files
// It implements synchronous (blocking) programming
// Naming convention: variable name matches module name
const fs = require("fs");

// Read food.txt and print its contents
// readFileSync > synchronous version of this method, two params: file path, encoding
var food = fs.readFileSync("food.txt", "utf8");
console.log(food); // 1

// Print a success message
console.log("food.txt read successfully"); // 2

// Read drinks.txt and print its contents
var drinks = fs.readFileSync("drinks.txt", "utf8");
console.log(drinks); // 3

// Print a success message
console.log("drinks.txt read successfully"); // 4