// here we'll demonstrate non-blocking (asynchronous) code
// in this case execution also goes from top to bottom
// instead, it moves on to the next operation without waiting for the current one to complete
// it uses callback functions to handle the results of the operations
// this is ideal for a server, as it doesn't block other requests
// require the file system module
const fs = require("fs"); // built-in module
// read contents of larger file
// provide a callback function to handle when the operation ends and print out the contents
// three parameters: filename, encoding, callback function
fs.readFile("food.txt", "utf8", (error, data) => {
    console.log(data);
});
// print a success message
console.log("Food file read successfully");
// read contents of smaller file
// provide a callback function to handle when the operation ends and print out the contents
fs.readFile("drinks.txt", "utf8", (error, data) => {
    console.log(data);
});
// print a success message
console.log("Drinks file read successfully");