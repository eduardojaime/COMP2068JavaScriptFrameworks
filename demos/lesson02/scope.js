// Scope (object visibility)
// In JS inheritance flows inwards
var x = 1; // global variable, accessible anywhere in this file after this line of code
console.log(x);

function addNumber(){
    let y = 3; // method/local scope
    x = x + y;
    return x;
}

function multiplyNumber() {
    return x * 3; // y cannot be used here because it was declared out of scope
}

console.log(addNumber());
console.log(multiplyNumber());
console.log(addNumber());
console.log(multiplyNumber());