// this example demonstrates blocking (synchronous) code
// import fs module to access file system using the require() function
const fs = require("fs"); // give it the same name as the package
// read food.txt (larger) file synchronously
// NOTE: most modules in node are asynchronous by default
// but the module will sometimes have synchronous versions that include 'sync'
// in the name (e.g. readFileSync vs readFile)
let food = fs.readFileSync("food.txt", "utf8");
// print out contents > output 1
console.log(food);
// print confirmation message > output 2
console.log("Food file read successfully");
// read drink.txt (smaller) file synchronously
let drink = fs.readFileSync("drinks.txt", "utf8");
// print out contents > output 3
console.log(drink);
// print confirmation message > output 4
console.log("Drink file read successfully");
// What will the output order be? 1 > 2 > 3 > 4