// this file demonstrates a regular JavaScript function (open function)
// this function is a counter, it increments a variable each time it is called
function counter() {
    // declare variable
    let count = 0; // local variable, always reset to 0
    // increment variable
    count++;
    // print variable
    console.log(count);
}

// call function twice, what will the output be?
counter(); // 1
counter(); // 1
// the output will be 1, 1 because the variable count is declared inside the function
// every time the function is done, the value is destroyed
// it is not stored anywhere, so it is always reset to 0
// options to store the value:
// 1. global variable > declare count outside the function
// 2. pass the value as an argument > declare count as a parameter, but we need to pass the value each time we call the function
// 3. use a closure > declare count as part of the outer function, and return an inner function that increments the count