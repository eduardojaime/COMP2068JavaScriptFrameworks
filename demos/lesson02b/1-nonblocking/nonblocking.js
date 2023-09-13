// using the default readFile methods this time
// nonblocking (asynchronous) methods require a callback function
const fs = require("fs");
// data is accessed in the callback function, not returned
// callbacks are functions that specify what the app needs to do 
// when the operation is complete
// event-driven nature of JS
fs.readFile("food.txt", "utf-8", function(error, data) {
    console.log(data);
});
console.log("Food was delicious!");
fs.readFile("drinks.txt", "utf-8", function(error, data) {
    console.log(data);
});
console.log("Drinks were refreshing!");
// what's the output?? M1 > M2 > D > F
// nonblocking code does not guarantee output