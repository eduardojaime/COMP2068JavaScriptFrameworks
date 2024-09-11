// this file demonstrates blocking (synchronous) coding
// blocking code is executed in sequence, one after the other
// import fs module so we can read text files
const fs = require("fs"); // this is a built-in module
// read the larger file first and retrieve its contents
// Note: most modules in node will be async by default but expose a sync version of their methods
let food = fs.readFileSync("food.txt", "utf8"); // 1
// print out the contents of the larger file
console.log(food);
// print a message to the console
console.log("Food.txt read successfully"); // 2
// read the smaller file and retrieve its contents
let drinks = fs.readFileSync("drinks.txt", "utf8"); // 3
// print out the contents of the smaller file
console.log(drinks);
// print a message to the console
console.log("Drinks.txt read successfully"); // 4
// What will the output be? food, success, drinks, success