// In this example, we'll write a function that can be exported as an object
// Similar to using encapsulation in OOP, this function will have its values protected from outside access
// Closure pattern
function createCounter() {
    // Similar to a class, we can have properties and behaviour
    let counter = 0; // private local variable
    // One or more methods
    function increment() {
        counter++; // increment the counter
        console.log(counter); // show increased value in terminal
    }
    // add a function to decrement the counter as well
    function decrement() {
        counter--; // decrement the counter
        console.log(counter); // show decreased value in terminal
    }
    // the trick is to return an object definition, hence { }
    return { increment, decrement }; // these functions become public
}

// Similar to creating an instance of a class
// We can create a counter object
const myCounter = createCounter();
// now we can call the public methods defined
myCounter.increment(); // 1
myCounter.increment(); // 2
myCounter.increment(); // 3
// throws TypeError: myCounter.decrement is not a function unless you add decrement to the return statement
myCounter.decrement(); // 2
myCounter.decrement(); // 1
myCounter.decrement(); // 0