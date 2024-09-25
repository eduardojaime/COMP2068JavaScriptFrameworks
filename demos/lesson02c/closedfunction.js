// this function is a closure
// similar to a class in that it contains data and behaviour
function counter() { // in C#/Java this would be a class
    // data members
    let count = 0;
    // behaviour
    function increase() { // in C#/Java this would be a public method
        count++;
        console.log(count);
    }

    function decrease() { // in C#/Java this would be a public method
        count--;
        console.log(count);
    }
    // expose public methods using a return statement
    return { increase, decrease }; // no equivalent in C#/Java because they use public access modifiers
}
// to use it, we need to store the returned object in a variable
const c = counter(); // in C#/Java this would be 'var counter = new Counter();'
// now we can call the public methods defined in the return statement
c.increase(); // 1
c.increase(); // 2
c.decrease(); // 1
c.decrease(); // 0