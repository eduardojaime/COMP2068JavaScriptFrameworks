// We can define closures as functions that remember their variables in scope
// This is a closure
// behaves similar to a class
function closedFunction() {
    // global variable
    let counter = 1;

    // anonymous function stored in an object
    let increment = () => {
        counter++; // increment global variable
        console.log(counter);
    }

    return increment;
}

closedFunction();
closedFunction(); // returning the definition of the function but not its execution
// output >> 2, 3

// the trick is to put the definition in an object
let countMe = closedFunction(); 
// countMe now contains
// () => {
//     counter++; // increment global variable
//     console.log(counter);
// }
countMe();
countMe();
// output >> 2, 3 
// why? countMe remembers the value of counter because it's using it
