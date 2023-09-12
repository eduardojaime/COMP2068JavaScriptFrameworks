const fs = require("fs");
// synchronous (non-blocking code) requires callback functions
fs.readFile("food.txt", "utf-8", function (error, data) {
    console.log(data); // print once read operation completes
});
console.log("Food was delicious!");
// read drinks
fs.readFile("drinks.txt", "utf-8", function(error, data) {
    console.log(data);
});
console.log("Drinks were refreshing!");
// what's the output?
// M1 > M2 > D > F
// M1 > D > M2 > F
// actual > m1 m2 F D