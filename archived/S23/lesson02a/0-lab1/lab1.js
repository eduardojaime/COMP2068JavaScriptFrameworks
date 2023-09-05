// rock paper scissors game
// Use Prompt package to retrieve input from the user
// https://www.npmjs.com/package/prompt
// Install via terminal with > npm i prompt
const prompt = require('prompt'); // load package into file

// INPUT 
prompt.start(); // as per documentation page
// always let users know what to do or what's expected
console.log("Hello, please enter ROCK, PAPER, or SCISSORS.");

prompt.get(['userSelection'], function(err, result) {
    // retrieve userSelection from result object
    console.log(result);
    // Use MATH.RANDOM to generate computer input

    // PROCESS
    // Use if/else or switch statements to compare both selections and determine the winner
    
    // OUTPUT
    console.log("User Won!");
});
