// nonblocking behaviour will not stop and wait for external calls, execution will continue
// and when the external call is complete a callback function will be triggered
// these applies to calls to external services like databases or web apis
const fs = require("fs");

// use the async version of ReadFile to access the TXTs
// read longer file first
fs.readFile("food.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    // here is where we access the contents of the file
    console.log(data);
  }
});

console.log("What a delicious meal!");

fs.readFile("drinks.txt", "utf-8", (err, data) => {
  console.log(data);
});

console.log("Such refreshing drinks!");

// output order ???
// fastest to low
// both log message > drinks > food (always???)
// order of execution is not guaranteed
