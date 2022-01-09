// importing the built-in FS module in your application
// FileSystem > module allows you to manipulate your files
const fs = require('fs');

let breakfast = fs.readFile('breakfast.txt', 'utf-8', (error, breakfast) => {
    console.log(breakfast);
    console.log('Finished reading breakfast.txt');
});

let drinks = fs.readFile('drinks.txt','utf-8', (error, drinks) => {
    console.log(drinks);
    console.log('Finished reading drinks.txt');
});
