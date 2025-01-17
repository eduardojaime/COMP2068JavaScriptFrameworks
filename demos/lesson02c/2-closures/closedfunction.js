// This is a closure
// These are similar to classes in OOP languages like Java or C#
// They can contain data and behaviour
// In JS functions are first class objects
function counter() {
    // data
    let count = 0;
    // behaviour
    function increment() {
        count++;
        console.log(count);
    }

    function decrement() {
        count--;
        console.log(count);
    }

    // expose behaviour use 'return'
    // similar to using 'public' in OOP but we don't have this access modifiers in JS
    return { increment, decrement };
}

// call twice, what's the output?
counter(); // 1 > none
counter(); // 2 > none
// there was no output because...
// counter() returns the definition of the function increment, not the result
// define a variable and assign the function to it
let myCounter = counter();
// now we can call the increment method
myCounter.increment(); // 1
myCounter.increment(); // 2 
// we can even add more methods to the object
myCounter.decrement(); // 1
myCounter.decrement(); // 0