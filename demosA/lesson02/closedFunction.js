// Closed Functions are those functions that implement closures
function closedFunction() {
    let counter = 1;

    // closure
    let increment = () => {
        counter++; // utilizing the global variable in here, turns it into a closure
        console.log(counter);
    }

    return increment;
}

// call twice, what's the output? > 2, 3
closedFunction();
closedFunction();
// try console.log
console.log(closedFunction());
console.log(closedFunction());
// calls above return the definition of increment, not its execution result

// so how can we use the inner function?
// put the result of calling closedFunction() in a variable and use it as a method
let countMe = closedFunction();
// countMe now stores: 
// () => {
//     counter++; // utilizing the variable in here, turns it into a closure
//     console.log(counter);
// }
countMe(); // inner function remembers that counter exists with value 2
countMe(); // inner function remembers that counter exists, was incremented and value is 3
