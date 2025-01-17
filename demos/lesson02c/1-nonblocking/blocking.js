// This is a synchronous (blocking) program
// Execution goes from top to bottom
// Import fs module to access the file system
// declare a variable with the same name as the module being imported
const fs = require("fs");
// Read the larger file (food.txt) synchronously
let food = fs.readFileSync("food.txt", "utf8");
// Output contents of the larger file
console.log("Food data source contents:");
console.log(food);

// Read the smaller file (drink.txt) synchronously
let drinks = fs.readFileSync("drinks.txt", "utf8");
// Output contents of the smaller file
console.log("Drink data source contents:");
console.log(drinks);

// Read the code, what would the expected output be?
// msg line 9 > food.txt > msg line 15 > drinks.txt
// is this guaranteed 100% of the time? Yes
// This is a blocking program, execution is synchronous which guarantees the order of execution