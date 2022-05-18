const fs = require('fs');

// we'll use the async version of the readfile method
// it requires a callback function to know what to do when the read operation completes
fs.readFile('food.txt', 'utf-8', (error, food) => {
    // food is where my list is stored
    // error is whatever error is thrown by the readFile method while reading
    console.log(food);
});

console.log('We ate a lot!');

fs.readFile('drinks.txt', 'utf-8', (error, drinks)=>{
    console.log(drinks);
});

console.log('What a feast!');
// Output >> ate, feast, food, drinks