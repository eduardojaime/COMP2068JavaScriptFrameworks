// In node.js most libraries or modules are non-blocking
// We'll use the synchronous methods in file system module to demonstrate blocking code
// fs is for File System
const fs = require("fs"); // this is built-in, so just provide the name of the module
// const http = require("http"); > just another example of importing a built-in package/module/library

// Read and print contents of larger file
// Usually methods that end with "Sync" are blocking methods
let food = fs.readFileSync("food.txt", "utf-8"); // this will block the execution of the code until the file is read and contents are stored in the variable food
console.log(food);
console.log("INFO: Done reading food.txt"); // this will only be printed after the contents of food.txt is read and printed to the console

// Read and print contents of the smaller file
let drinks = fs.readFileSync("drinks.txt", "utf-8"); // this will block the execution of the code until the file is read and contents are stored in the variable drinks
console.log(drinks);
console.log("INFO: Done reading drinks.txt"); // this will only be printed after the contents of drinks.txt is read and printed to the console

// what will the output be? drinks then food or food then drinks?
// Answer: food then drinks, always, the order of execution is guaranteed