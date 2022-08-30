// built-in prompt method in JS works for a browser
const prompt = require('prompt');
prompt.start();
console.log('Please enter a letter from A to Z');

prompt.get(['letter'], function (err, result) {
    console.log('You entered letter ' + result.letter);
    // game functionality here
});


// console.log(result.letter);
// console.log(choice);