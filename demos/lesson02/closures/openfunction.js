// This file demonstrates how functions work in JS
// Functions are first-class citizens in JS, meaning they can be treated like any other value
// Define a function to count
// global scope variable
// let counter = 0; // global variable to keep track of the count (it can be overriden by any function that sees it, not recommended)

function count() {
    let counter = 0; // local variable to keep track of the count
    counter++; // increment the counter
    console.log(counter); // show increased value in terminal
}

// Call the count function multiple times, what values do you expect to see in the terminal?
count(); // 1 > 1
count(); // 2 > 1
count(); // 3 > 1

// Challenge > I want to keep the count value between function calls, how can I do that?
// 1 liner change > use global scope
// this brings another challenge... 
// what if I have another unrelated function that also uses a global variable named counter? 
// might create a logic error, because variables in the global scope can be accessed and modified by any function
// which can lead to unintended consequences and bugs in the code.
// OOP > encapsulation in order to avoid this problem, but in JS we'll use the closure pattern