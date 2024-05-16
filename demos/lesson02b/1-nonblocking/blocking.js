// use the fs module to access the filesystem
const fs = require("fs");
// read contents of food.txt (larger file)
let food = fs.readFileSync("food.txt", "utf8");
console.log(food);
// print out success message
console.log("Success! 1");
// read contents of drinks.txt (smaller file)
let drinks = fs.readFileSync("drinks.txt", "utf8");
console.log(drinks);
// print out success message
console.log("Success! 2");
// if we run this code what would the output be?
// 2 > drinks > 1 > food
// food > 1 > drinks > 2