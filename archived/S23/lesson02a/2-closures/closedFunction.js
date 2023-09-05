// Closures are functions that contain preserved data
// when you create a closure, you're telling JS to remember the state of things inside the func
// only the variables used inside the func are considered 'closures'
// it's some sort of stateful function, it will remember its previous state every time we call it
// these are a way to section off code into a module
// makes it easy to reuse sections of code without reinitilizing variables every time
function closedFunction() {
    let counter = 1;

    // declare a function definition object
    let increment = () => {
        counter++;
        console.log(counter);
    }
    // return definition of inner function
    return increment; // without parenthesis
}

// try calling it twice > 2,2 or 2,3
closedFunction(); // this returns only the definition of the function, but not the result of its execution
closedFunction(); // in fact, it's not even executing the increment function

// usually, you would create an object to store the definition and then call it
let countMe = closedFunction();
countMe();
countMe();
