// import
const prompt = require('prompt');
// start
prompt.start();

console.log("Please enter R, P, or S. Any other key will exit.")
// retrieve data
prompt.get(['userSelection'], (err, result)=>{
    console.log(result.userSelection);
    // generate computer selection
    // determine winner
    // show output
    console.log("You won!");
});
