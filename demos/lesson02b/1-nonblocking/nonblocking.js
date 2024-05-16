// most node modules are asynchronous by default
const fs = require("fs");
// read contents of food.txt (larger file)
// asynchronous (nonblocking) programming requires you to use callbacks
// a callback is a function that tells the method what to do once its done
fs.readFile("food.txt", "utf8", (error, data) => {
    // data is the contents of the file
    console.log(data);
});
// print out success message
console.log("Success! 1");
// read contents of drinks.txt (smaller file)
fs.readFile("drinks.txt", "utf8", (error, data) => {
    // data is the contents of the file
    console.log(data);
});
// print out success message
console.log("Success! 2");
// if we run this code what would the output be?
// 1 > 2 > drinks > food
// 1 > 2 > food > drinks