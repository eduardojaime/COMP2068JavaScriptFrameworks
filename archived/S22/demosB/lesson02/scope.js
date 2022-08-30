// Scope
// In JS scope flows inwards from higher to lower levels
// global scope
let x = 1;

function addNumber() {
    // method scope or local scope
    let y = 100; // local variable is available from the point where it's created until }
    // return x + 3;
    x = x + 3;
    return x + y;
}

function multiplyNumber() {
    return x *= 3; // shorthand for x = x * 3
}

// try it out
console.log(addNumber());
console.log(multiplyNumber());
console.log(addNumber());
console.log(multiplyNumber());
// 4, 3, 4, 3