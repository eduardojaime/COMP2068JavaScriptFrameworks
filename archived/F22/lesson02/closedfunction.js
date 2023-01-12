function closedFunction() { // outer function
    let counter = 1;

    // closure is a variable set to the result of an anonymous function
    let increment = () => { // inner function 
        counter++;
        console.log(counter);
    }

    return increment; // returns the definition of the inner function
}

// call closedFunction twice
closedFunction(); // it didn't return anything
closedFunction(); // because closedFunction as a method returns the definition, not the execution

// store the definition of the inner function somewhere to use it
let countMe = closedFunction();
countMe(); // returns 2
countMe(); // returns 3, the definition remembers the value of variables in its scope