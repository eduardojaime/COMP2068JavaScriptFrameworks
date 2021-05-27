// 5) best practices - avoid using global variables
// let message = "Global Scope";

// 1) create a wrapper function with a function inside
function parent() {
    let message = "Hello World"; // message variable is created
    
    // 2) create inner function
    function child() {
        // 4) overwrite local scope
        // var message = "Goodbye World"; //What would this do?
        // most local scope always takes precedence
        console.log(message); // message is accessible
    }
    
    return child;
} // message is destroyed

// Access message
// Incorrect way > message is scoped in the parent function
// this variable only lives within the function
console.log(message);

// 3) call parent function
const childFN = parent();
// even though parent was executed already and returned the child function
// child() remembers the environment in which it was created (i.e. variables like message)
childFN();