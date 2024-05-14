// same process as before
const fs = require('fs');
// read food.txt and print out its contents
fs.readFile(
    "food.txt", // file path to read
    "utf8", // expected encoding
    (error, data) => { // function to tell node how to handle the file
        console.log(data); // print out the contents of the file
    }
);
// then print out a success message
console.log("Successfully read food.txt");
// read drinks.txt and print out its contents
fs.readFile(
    "drinks.txt", // file path to read
    "utf8", // expected encoding
    (error, data) => { // function to tell node how to handle the file
        console.log(data); // print out the contents of the file
    }
);
// then print out a success message
console.log("Successfully read drinks.txt");
// What will the output be?
