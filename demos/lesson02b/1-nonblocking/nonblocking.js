// This is the non-blocking version of the program
// In this case, we need to provide callback functions to handle the data when it is available
// Execution will not wait for the data to be available
const fs = require('fs');
// Read the contents of the first file asynchronously and print them to the console
// Three parameters: filename, encoding, and callback function
fs.readFile('food.txt', 'utf8', (error, data) => {
    // we would usually check for errors here
    // but for this example, we'll ignore them
    console.log(data); // 1
});
// Print an additional message to the console
console.log('This food was delicious!'); // 2
// Do the same for the second file
fs.readFile('drinks.txt', 'utf8', (error, data) => {
    console.log(data); // 3
});
console.log('These drinks were refreshing!'); // 4

// What is the output of this program? >> 2 4 3 1
// Output and execution order is not guaranteed