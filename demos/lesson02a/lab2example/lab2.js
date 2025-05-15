// this is my entrypoint defined in package.json
// the program must implement prompt package
// install it via npm before implementing the code
const prompt = require('prompt');
// start the prompt
prompt.start();
// prompt the user for a value, provide callback
// first parameter is an array of values we want
// second parameter is a callback function that will be called when the user finishes entering values
prompt.get(['choice'], function (error, result) {
    // retrieve the value from the result object by name
    // name must match the one given in the array
    let userChoice = result.choice;

    // do something with the value
    console.log('You entered: ' + userChoice);

    // for RPS here you will generate computer selection, compare choices and output the result
});