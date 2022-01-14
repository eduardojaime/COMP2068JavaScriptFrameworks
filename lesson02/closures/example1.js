// In JS inheritance flows inwards
// X is available within any function
// but variables inside these functions are not available outside of them
var x = 1;

function addNumber() {
    return 3 + x;  
    // x = x + 3;
    // return x;  
}

function multiplyNumber() {
    return 3 * x;
    // x = x * 3;
    // return x;
}

// Displays an interactive list of the properties of the specified JavaScript object
console.dir(addNumber);
// call these functions
console.log(addNumber());
console.log(multiplyNumber());
console.log(addNumber());
console.log(multiplyNumber());
// What values are expected?
// Global variables can be read and modified by any function that can access them