// Scope > in JS it flows inwards
// levels of scope > global & local
// variables declared globally are available locally
// variables declared locally are NOT available globally
let x = 1;

function addNumber() {
    return x += 3;
    // x = x + 3; return x;
}

function multiplyNumber() {
    return x *= 3;
    // x = x * 3; return x;
}

function conditionalFunction() {
    if (true) {
        let y = 100;
    }
}

console.log(addNumber());
console.log(multiplyNumber());
console.log(addNumber());
console.log(multiplyNumber());
// output >> 4, 3, 4, 3
// console.log(y); // trying to print local-scoped variable