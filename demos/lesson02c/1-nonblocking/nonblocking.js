// This is the asynchronous (non-blocking) version of the code
// this type of programming requires a callback function to tell node what to do
// when the intensive operation is complete
const fs = require("fs");
// read the food file and pass a callback function to handle the data
fs.readFile(
  "food.txt", // file to read
  "utf8", // expected text encoding
  (error, data) => {
    // callback function to handle the data
    // we are telling node what to do once the read operation is complete
    console.log(data); // print the contents of the file
  }
);
// print success message
console.log("Success 1"); // synchronous operation
// read the drinks file and pass a callback function to handle the data
fs.readFile("drinks.txt", "utf8", (error, data) => {
  console.log(data);
});
// print success message
console.log("Success 2");
// what order do you expect the messages to be printed in?
// 1 > 2 > drinks > food
// key takeaways > there's no way to guarantee output order in async programming