// closures are similar to OOP classes in that they contain
// data and behaviour
function closedFunction() {
    // local function scope
    let counter = 1;
    // function definition using arrow syntax
    let increment = () => {
        counter++; // increment
        console.log(counter); // print out
    }
    return increment; // export the inner function to outside
}

// closedFunction();
// returns the definition of the inner function and stores it in the object
let countMe = closedFunction();
countMe(); // 2
countMe(); // 3