// We can define closures as functions that remember their variables in scope
// This is NOT a closure
function openFunction() {
    let counter = 1;
    counter++;
    console.log(counter);
}

openFunction();
openFunction();
// output >> 2, 2 why?