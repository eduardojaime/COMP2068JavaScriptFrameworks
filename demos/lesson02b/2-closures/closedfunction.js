// Count function as a closed function
// This functions behave as objects
// At this point, this is a module
function counter() {
    // similar to a class, these functions can have
    // properties and methods
    // declare private variable to hold count
    let count = 0; // local scope
    // declare a method to increase the count
    function increase() {
        count++;
        console.log(count);
    }
    // declare a method to decrease the count
    function decrease() {
        count--;
        console.log(count);
    }
    // the key is to make inner functions available
    // to the outside world via return statement
    // return an object with methods
    return { increase, decrease };
}
// similar to having public methods in a class
// create an instance of the counter
let myCounter = counter(); // 
// call the increase method
myCounter.increase(); // 1
myCounter.increase(); // 2
myCounter.increase(); // 3
myCounter.decrease(); // 2
myCounter.decrease(); // 1