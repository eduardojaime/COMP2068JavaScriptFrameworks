// we want to have a counter function that keeps the current count value
// closed functions are similar to classes in that
// they have data and behaviour
function closedFunction() {
    // data member
    let counter = 1;
    // method to increase and print count
    let increment = () => {
        counter++;
        console.log(counter);
    }
    // return the definition of inner function
    return increment;
}
// call twice > what will the output be?
closedFunction(); // no output
closedFunction(); // no output
// store the inner function definition in an object and then call as a method twice
let countMe = closedFunction();
countMe(); // 2
countMe(); // 3