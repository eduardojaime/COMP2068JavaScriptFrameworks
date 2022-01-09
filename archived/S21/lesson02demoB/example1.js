// Scope
// In JS inheritance flows inwards (from environment to functions)
let x = 1;

function addNumber() {
    x = x + 3;
    // x += 3;
    return x;
}

function multiplyNumber() {
    x = x * 3;
    return x;
}

console.log(addNumber());
console.log(multiplyNumber());
console.log(addNumber());
console.log(multiplyNumber());
// output??? 4 12 15 45
// 4 3 4 3