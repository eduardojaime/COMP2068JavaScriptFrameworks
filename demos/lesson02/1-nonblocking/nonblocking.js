// asynchronous version of the code
// access 2 external data sources asynchronously (we'll have to use callbacks)
const fs = require("fs");
// when accessing asynchronously, program will not wait
// therefore we need to use callback functions to specify what needs to be done when access is done
fs.readFile("food.txt", "utf-8", (error, data) => {
    // code inside this block only executes when readFile operation ends
    console.log(data);
}); // 1
console.log("Yummy food"); // 2
fs.readFile("drinks.txt", "utf-8", (error, data) => {
    // code inside this block only executes when readFile operation ends
    console.log(data);
}); // 3
console.log("Refreshing drinks"); // 4
// what will the output be?
// 2 > 4 > 3 > 1
// is it guaranteed?