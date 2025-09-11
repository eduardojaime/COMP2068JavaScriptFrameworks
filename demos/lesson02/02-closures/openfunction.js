// Let's write a program that increase a number by one and prints it in the terminal
// This is an 'open' function than can be called from anywhere in our file here
// Approach 1 Using global scope
let counter = 0; // declare global scope variable

function increase() {
    // let counter = 0; // declare local scope variable
    counter++; // increase
    console.log(counter); // print
}
// if we want to add behaviour we add more functions. e.g decrease
function decrease() {
    counter--; // decrease
    console.log(counter); // print
}

// Call the function three times
increase(); // 1 (local scope) // 1 (global scope)
increase(); // 1 (local scope) // 2 (global scope)
increase(); // 1 (local scope) // 3 (global scope)
decrease(); // 0 (local scope) // 2 (global scope)

// What's the problem or limitation with using the global scope?
// 1 - variables in global scope are 'vulnerable' meaning any other function can change them
// 2 - if we have many functions using the same global variable name, they will conflict
// 3 - it is hard to track changes to global variables in large code bases