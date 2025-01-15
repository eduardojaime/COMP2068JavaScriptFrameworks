// This is a closed function that can be shared as a module across different files
// It is similar to a class in object-oriented programming
// This function contains data and behaviour
function counter() {
    // data
    let count = 0;
    // behaviour
    function increment() {
        count++;
        console.log(count);
    }
    function decrement(){
        count--;
        console.log(count);
    }
    // expose methods to the outside world
    // this is needed because JavaScript doesn't have access modifiers (public/private/protected)
    return { increment, decrement };
}

// Call twice, what's the output?
counter(); // no output > because we didn't call the increment method
counter(); // no output

// declare an object to store the function and then call the increment method
const myCounter = counter(); // similar to creating an instance of a class
myCounter.increment(); // 1
myCounter.increment(); // 2
myCounter.decrement(); // 1