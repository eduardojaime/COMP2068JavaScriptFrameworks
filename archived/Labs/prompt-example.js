// Install prompt via terminal
// > npm i prompt
// See documentation page for more details https://www.npmjs.com/package/prompt
const prompt = require('prompt');

prompt.start();

console.log('Welcome to Rock-Paper-Scissors!');
console.log('-------------------------------');
console.log('Please enter: R, P or S');
prompt.get(['selection'], function (err, result) {
    // Error handling logic
    if (err)
    {
        console.log(err);
    }

    const ai = getComputerSelection();
    console.log('  You chose: ' + result.selection);
    console.log('  PC chose: ' + ai);

    // calculate match result and show result

    console.log('User wins!'); 
});

function getComputerSelection() {
    // calculate computer selection: use Math.random() and if-else statements
    return "R";
}
