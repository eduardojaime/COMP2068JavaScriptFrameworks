// 1) Create function without closures
function counter() {
    let count = 1; 
    // declare a variable and set it to an anonymous function
    function increment() {
        count++;
        console.log(count);
    }
    // in the same way that a class has multiple methods
    // we can return an object with multiple methods
    function decrement() {
        count--;
        console.log(count);
    }
    return { increment, decrement } ;
} 

// 2) Call twice, what values will be shown?
closedFunction();   
closedFunction(); 
// 3) Why do we get nothing?
// closedFunctions returns the definition of increment not its execution

// 4) Create a variable and set it to the result of calling closedFunction() which is increment
let myCounter = counter();
// 5) Call twice, what values will be shown?
myCounter.increment();
myCounter.increment();
myCounter.decrement();
myCounter.decrement();
// 6) why? The closure keeps our values in memory
