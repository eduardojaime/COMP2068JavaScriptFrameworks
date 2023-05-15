// Nonblocking is also referred to as Asynchronous code
// in async coding we use callbacks to tell the code what to do when an operation completes
// execution will not wait for an external call to complete, it will continue execution of the code
const fs = require('fs');

// use async (default) version of readFile()
// there's no need to use variables to store the data, the callback function handles that
fs.readFile('food.txt', 'utf-8', (err, data) => {
    // err is an error message in case something happens during the reading operation
    // data is the contents of the file
    console.log(data);
});

console.log('such delicious food!'); // print something else

fs.readFile('drinks.txt', 'utf-8', (err, data)=>{
    console.log(data);
});

console.log('such refreshing drinks!');

// Output order ???
// technically no guarantee, there's no way to predict output order in async functions
// messages first, and then drinks and then food
// output might vary depending on the external service