// Use the fs module to access the filesystem and read the files
// Node APIs are asynchronous by default
// so we'll use a 'sync' version of the ReadFile method
const fs = require("fs"); // fs is built-in
let food = fs.readFileSync("food.txt", "utf-8"); // retrieve contents
console.log(food); // print out list
console.log("Food was delicious!"); // M1
// do the same think with the drinks file
let drinks = fs.readFileSync("drinks.txt", "utf-8");
console.log(drinks);
console.log("Drinks were refreshing!"); // M2
// What do you think the output will be??
// F > M1 > D > M2
// Output order is guaranteed