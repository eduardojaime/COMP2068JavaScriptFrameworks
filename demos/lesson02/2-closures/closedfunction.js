// this is a closure
// inner function will remember values for variables in the same scope level
function closedFunction() { // outer function
    // data
    let counter = 1; // block level variable
    // behaviour, as a function definition
    let increment = () => { // definition is at same level as counter above
        counter++; // access upper level variable
        console.log(counter);
    }
    // the key is to return the inner function definition
    return increment; // this way increment() becomes a "module"
}

// call twice, what will you see?
closedFunction();
closedFunction(); // this will not display anything because it's only the inner function definition
// store the definition in an object and call as a method
let countMe = closedFunction(); // returns the inner function (closure) definition
countMe(); // now we can execute it
countMe(); // output 2 > 3