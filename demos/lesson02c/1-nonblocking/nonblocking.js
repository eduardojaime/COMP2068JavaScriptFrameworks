const fs = require("fs");
// no need to store in variable, use callback function instead
fs.readFile("food.txt", "utf-8", (error, data) => {
    // contents of file are accessed inside the callback function
    console.log(data);
});
console.log("Food was delicious!"); // M1

fs.readFile("drinks.txt", "utf-8", (error, data) => {
    // contents of file are accessed inside the callback function
    console.log(data);
});
console.log("Drinks were refreshing!"); // M2
// what will the output be?
// M1 > M2 > F > D
// Async output order is not guaranteed

