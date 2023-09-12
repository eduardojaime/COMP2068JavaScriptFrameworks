// closed functions remember the in-scope data they can access
// closed functions behave like classes in that they contain data and behaviour
function closedFunction() {
    // data members
    let counter = 1;
    // methods (behaviour) 
    // using arrow function syntax
    let increment = () => {
        counter++; // increase
        console.log(counter); // print out
    }
    // makes the inner function available to code outside of the closed function
    return increment; 
}
// call twice
closedFunction();
closedFunction();
// store the definition of the inner function in a variable
let closure = closedFunction();
closure();
closure();
// output? 2 3