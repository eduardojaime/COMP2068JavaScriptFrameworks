// this is a closure, a function that returns a function
// it's similar to a class in that it can have private variables
// and methods that are only accessible to the function
function counter() {
    // similar to a class this function behaves like an object
    // with data and behaviour
    let count = 0;
    // declare a method that increases the count by 1
    function increment() {
        count++;
        console.log(count);
    }
    // we can have more than one public method
    function decrement() {
        count--;
        console.log(count);
    }
    // export the method definitions (don't write the parenthesis)
    return { increment, decrement };
}
// to use it, we need to assign the function to a variable
// and call the inner methods
let c = counter(); // similar to when you do 'var c = new Counter();' in C#
c.increment(); // 1
c.increment(); // 2
c.decrement(); // 1 
c.decrement(); // 0