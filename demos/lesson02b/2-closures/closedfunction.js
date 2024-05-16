// this is a closure, a function that returns functions definitions
// and keeps the values of local variables
// it's similar to a class in the sense that it has behaviour and data
function closedfunction() {
    // declare data
    let counter = 0;
    // declare behaviour
    let increment = () => {
        counter++;
        console.log(counter);
    };
    // similar to a class, I can have more than one behaviour
    let decrement = () => {
        counter--;
        console.log(counter);
    };
    // export the behaviour
    // this is the only way to access the inner data
    // in a class, you'd make these methods public
    return { increment, decrement };
}
// if we call this function twice what would the output be?
closedfunction();
closedfunction();
// you need to put the closure in an object and then access inner methods
const counter = closedfunction(); // initialization, set counter to 0 
counter.increment(); // increases counter to 1
counter.increment(); // increases counter to 2
counter.decrement(); // decreases counter to 1
counter.decrement(); // decreases counter to 0
// ?? >> ?? >> ?? >> ??
// 1 2 1 0