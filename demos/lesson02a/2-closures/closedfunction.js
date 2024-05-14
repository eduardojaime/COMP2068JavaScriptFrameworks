// I want to be able to reuse the function
// and keep the counter value
// closures are functions with data and behaviour
// just like a class would be in C# or Java
function closedFunction() {
    // data
    let counter = 0;
    // behaviour
    // note this is just a definition, not a call
    let increment = function() {
        counter++;
        console.log(counter);
    }
    // return the behaviour to the caller
    return increment; // this returns a function definition that can be called
}
// call twice, what to expect?
closedFunction(); // nothing
closedFunction(); // nothing
// closure pattern
let counter = closedFunction(); // counter is now an object
// call as a method
counter(); // 1
counter(); // 2