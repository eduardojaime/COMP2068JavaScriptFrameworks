// here we demonstrate blocking (synchronous) code
// in this case execution goes from top to bottom
// and waits for each operation to complete before moving on
// this is not ideal for a server, as it would block other requests

// require the file system module
const fs = require("fs"); // built-in module
// read contents of larger file
let food = fs.readFileSync("food.txt", "utf8");
// print out contents
console.log(food);
// print a success message
console.log("Food file read successfully");
// read contents of smaller file
let drinks = fs.readFileSync("drinks.txt", "utf8");
// print out contents
console.log(drinks);
// print a success message
console.log("Drinks file read successfully");
// What would the output be? 