// Synchronous (blocking) code
// We'll read both files one after the other, and print the contents of both files
// in the order they were read
// use the fs package to access the file system
const fs = require("fs");
// read the food file
let food = fs.readFileSync("food.txt", "utf8");
// print the contents
console.log(food);
// print a success message
console.log("Success 1");
// read the drinks file
let drinks = fs.readFileSync("drinks.txt", "utf8");
// print the contents
console.log(drinks);
// print a success message
console.log("Success 2");
// what order do you expect the messages to be printed in?
// food > 1 > drinks > 2