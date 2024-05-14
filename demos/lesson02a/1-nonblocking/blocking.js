// import fs module to access file system
const fs = require("fs");
// read two files and output their contents
// call readFileSync method to read food.txt 
// and store its contents in food variable
let food = fs.readFileSync("food.txt", "utf8");
console.log(food);
// print a success message
console.log("Successfully read food.txt");
// do the same with drinks.txt
let drinks = fs.readFileSync("drinks.txt", "utf8");
console.log(drinks);
console.log("Successfully read drinks.txt");
// what will the output be?
// food.txt > success food > drinks.txt > success drinks
// drinks.txt > success drinks > food.txt > success food