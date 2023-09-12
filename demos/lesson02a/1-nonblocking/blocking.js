// read both files with blocking code
const fs = require("fs"); // var has same name as module

// read food.txt and output list
// fs module has readFile() and readFileSync() methods available
let food = fs.readFileSync("food.txt", "utf-8"); // no need for callback function
console.log(food);
console.log("Food was delicious!");
// read drinks.txt and output list
let drinks = fs.readFileSync("drinks.txt", "utf-8");
console.log(drinks);
console.log("Drinks were refreshing!");
// what's the output?
// F > M1 > D > M2