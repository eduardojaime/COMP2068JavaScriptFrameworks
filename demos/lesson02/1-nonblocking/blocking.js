// this program simulates accessing two external data sources (file system) synchronously
// and displays data from those sources
// use built-in package called fs, no need to install via npm
const fs = require("fs"); // import by name
// read longer file first and print out contents
// two parameters: path to file, encoding
let food = fs.readFileSync("food.txt", "utf-8");
console.log(food); // 1
// print out some text
console.log("Yummy food!"); // 2
// read shorter file and print out contents
let drinks = fs.readFileSync("drinks.txt", "utf-8");
console.log(drinks); // 3
// print out some text
console.log("Refreshing drinks!"); // 4
// based on this code, what will the output be?
// message order
// 1 > 2 > 3 > 4