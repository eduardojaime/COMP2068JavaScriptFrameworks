// This function follows the closure pattern
// It has a nested function that uses the parent function's variables
// As you can see it will behave pretty much like a class in C# or Java
function closedFunction() {
  // Data > local variable, this is a private variable (similar to encapsulation in OOP)
  let counter = 0;
  // Behaviours > nested functions that can access the local variables
  function increment() {
    counter++;
    console.log(counter);
  };
  function decrement() {
    counter--;
    console.log(counter);
  };
  // everything inside the function is private unless we "return" it
  // in OOP this is similar to using public methods to access private variables
  return { increment, decrement };
}
// what happens when we run the function twice?
closedFunction(); // nothing
closedFunction(); // nothing
// put the closed function in a variable
let counter = closedFunction(); // this similar to instantiating a class in OOP
// now we can use the methods
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1 
counter.decrement(); // 0
// a closed function behaves like an object in OOP
// data is persisted for as long as the object exists
// data is modified by the public methods available in the object (increment and decrement)