// We want to write a reusable function that increases and decreases a number
// We want to avoid using global scope variables
// We can use a 'closed' function to achieve this
// A closed function is a function that has its own scope and cannot be accessed from outside
// somewhat like an object with private properties and methods
function counter() {
    // declare variables (properties)
    let count = 0; // private variable
    // declare methods (behaviour)
    function increase() {
        count++; // increase
        console.log(count); // print
    }
    function decrease() {
        count--; // decrease
        console.log(count); // print
    }
    // expose methods (export)
    // all methods will be 'private' unless we return them
    // return an object with method definitions
    return { increase, decrease };
}

// Call twice to test
counter()
counter()
// no output because counter() returns an object with methods but we don't call them
// we need to store this object in a variable to use the methods
let myCounter = counter();
myCounter.increase(); // 1
myCounter.increase(); // 2
myCounter.decrease(); // 1
myCounter.decrease(); // 0