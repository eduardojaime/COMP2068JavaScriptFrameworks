// this is a closure, a function that "remembers" the environment in which it was created
// similar to declaring a class in Java or C# (OOP)
// but in JS we don't have syntax to declare classes
function counter() {
    // similar to a class declaration, we can have data and behaviour
    // declare variable to hold the count
    let count = 0;
    // declare function to increment the count
    function increment() {
        count++;
        console.log(count);
    }
    // we can have more than one function in a closure
    // declare function to decrease the count
    function decrement() {
        count--;
        console.log(count);
    }
    // return an object with the functions we want to expose (similar to public methods in a class)
    // this is the key part of a closure
    return { increment, decrement };
}
// use it similar to a class, create an instance of the closure and call the functions
let myCounter = counter(); // similar to var myCounter = new Counter(); in class-based languages
myCounter.increment(); // 1
myCounter.increment(); // 2
myCounter.decrement(); // 1
myCounter.decrement(); // 0
