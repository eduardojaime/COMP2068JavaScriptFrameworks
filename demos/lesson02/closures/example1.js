// Scope flows inwards
// global variable
// global scope
var x = 1;

function addNumber() {
    x = 3 + x;
    return x;
}

function multiplyNumber() {
    x = 3 * x;
    return x;
}
// interactive list of the properties of the JavaScript object
console.dir(addNumber);

// call these functions
console.log(addNumber()); // 4
console.log(multiplyNumber()); // 3
console.log(addNumber()); // 4
console.log(multiplyNumber()); // 3


