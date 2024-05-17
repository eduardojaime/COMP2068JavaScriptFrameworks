// This is an open function, it's just a regular function and does not use the closure pattern
function openFunction() { 
    // local variable
    let counter = 0;
    // increment the variable
    counter++;
    // print its value
    console.log(counter);
}
// if we call the function twice, what output do you expect?
openFunction(); // 1
openFunction(); // 1