// This function follows the closure pattern
// variables declared inside of this function are not accessible to other functions (encapsulation)
// but the function itself is accessible to other functions (closure)
function count() {
    let counter = 0; // local scope
    // declare inner function to increase and decrease
    function increment() {
        counter++;
        console.log(counter);
    }
    function decrement() { 
        counter--;
        console.log(counter);
    }
    // return the inner function definition when calling count()
    return { increment, decrement };
}
// this works similar to creating an instance of an object in OOP languages like C#
// var obj = new count();
// this returns the inner function definitions and stores them in the variable counter
const counter = count();
// now call the inner functions
counter.increment(); // 1
counter.increment(); // 2
counter.increment(); // 3
counter.decrement(); // 2
counter.decrement(); // 1

