// Install prompt via npm https://www.npmjs.com/package/prompt
// Import package
const prompt = require('prompt');
// Start
prompt.start();
// Use
console.log("Welcome to RPS, please enter R, P or S");
// 1) list of prompts, 2) callback function to execute when user finishes entering prompts
prompt.get(['selection'], function(err, result) {
    // get computer selection
    // compare both choices
    // show both selections
    // show game result

    // testing prompt data
    console.log(result); // result becomes a JSON object
    console.log('You entered: ' + result.selection);
});