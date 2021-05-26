// create a wrapper function with a function inside
function parent() {
    var message = "Hello World"; // message variable is created
    return message;
} // message is destroyed

// Access message
// Incorrect way > message is scoped in the parent function
// this variable only lives within the function
console.log(message);

// correct way
console.log(parent());