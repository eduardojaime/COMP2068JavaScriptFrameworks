// this is an example of non-blocking (asynchronous) code
// here we will use callback functions to handle the asynchronous operations
// import fs module to access file system using the require() function
const fs = require("fs"); // give it the same name as the package
// read food.txt (larger) file asynchronously 
// and use a callback function to handle when the data is ready
// callbacks tell the program what to do when the async operation is complete
// no need to declare variables here
fs.readFile("food.txt", "utf8", (err, data) => { 
    // this code will be executed only when the read operation is done
    // print out contents
    console.log(data);
});
// print confirmation
console.log("Food file read successfully");
// read drink.txt (smaller) file asynchronously
// and use a callback function to handle when the data is ready
fs.readFile("drinks.txt", "utf8", (err, data) => {
    // this code will be executed only when the read operation is done
    // print out contents
    console.log(data);
});
// print confirmation
console.log("Drink file read successfully");
// what will the output order be this time? 
// food confirm > drink confirm > food > drinks