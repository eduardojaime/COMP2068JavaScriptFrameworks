// use when you wish to provide dynamic behaviour and real time data updates
// execution will not stop when the program tries to read the file
// but there has to be a callback function associated to that call
// import fs
const fs = require('fs');
// read food.txt and print list
// no need to use a variable, take care of data inside callback function
fs.readFile('food.txt', 'utf-8', function(err, data) {
    // err is an error message in case reading fails
    // data is the text contained in the file
    console.log(data);
});

console.log('first message');

// read drinks.txt and print list
fs.readFile('drinks.txt', 'utf-8', function(err, data) {
    console.log(data);
});

console.log('second message');

// OUTPUT >> What do you think will happen?
// first, second, food, drinks (x3)
// first, second, drinks, food