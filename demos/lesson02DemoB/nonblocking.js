// import built in module fs
const fs = require('fs');

// 210
let breakfast = fs.readFile('breakfast.txt', 'utf-8', (error, breakfast) => {
    // this is the function that gets executed when readFile completes
    console.log(breakfast);
});

console.log('Finished reading breakfast.txt');
// 5
let drinks = fs.readFile('drinks.txt', 'utf-8', (error, drinks) => {
    console.log(drinks);
});

console.log('Finished reading drinks.txt');