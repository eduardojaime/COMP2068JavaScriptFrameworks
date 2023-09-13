// node is non-blocking (asynchronous) by default
// blocking code waits until operations complete to continue execution
// import fs module to access the file system and read files
const fs = require("fs");
// read food and print out list
let food = fs.readFileSync("food.txt", "utf-8");
console.log(food);
console.log("Food was delicious!");
// read drinks and print out list
let drinks = fs.readFileSync("drinks.txt", "utf-8");
console.log(drinks);
console.log("Drinks were refreshing!");
// what's the output?
// F > M1 > D > M2
// output order is guaranteed