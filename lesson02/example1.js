// In JS inheritance flows inwards
// X is available within any function
// but variables inside these functions are not available outside of them
var x = 1;

function addNumber() {
    return 3 + x;    
}

function multiplyNumber() {
    return 3 * x;    
}

// Displays an interactive list of the properties of the specified JavaScript object
console.dir(addNumber);