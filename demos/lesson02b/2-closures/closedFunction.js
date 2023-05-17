// closed functions or Closures are ways for us to write reusable modules
// these are functions with preserved data
// they will remember the state of things with every call

// it will behave similar to a 'class'
function closedFunction() {
    // data
    let counter = 1;
    // behavior
    let increment = () => { // this is a function definition
        counter++;
        console.log(counter);
    }
    // return the closure (increment)
    return increment; // without parenthesis, it will be an object that can be called as a method()
}

// closedFunction(); // 2
// closedFunction(); // 3
// // one way to utilize them but...
// closedFunction()(); // not very dev friendly
// // store the definition of the function in a variable
// let countMe = closedFunction();
// // call as a method when needed
// countMe(); // 2
// countMe(); // 3

module.exports = closedFunction();
