// create function with closure
function closedFunction() { // functions are somewhat like objects in JS
    let counter = 1;
    // declare a variable and set it to an annonymous function
    let increment = function() { // inner function has access to counter in the global scope
        counter++;
        console.log(counter);
    }
    return increment;
}

// call twice, what happens?
closedFunction();
closedFunction();
// why empty?

// create a variable and set it to the function
let countMe = closedFunction();
countMe();
countMe();
// why 2 and 3??
// closures keep values in memory



