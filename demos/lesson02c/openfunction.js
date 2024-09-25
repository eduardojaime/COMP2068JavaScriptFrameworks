// this is a regular javascript function
// we want to implement a counter that counts the number of times it is called
function counter() {
    // declare a variable to store the count
    let count = 0;
    // increase the count by 1
    count++;
    // print the count in the terminal
    console.log(count);
}
// call the function twice
// guess the output?
counter(); // 1
counter(); // 1
// What can we do to fix this?
// 1) declare count as global variable and use it inside counter()
// 2) pass count as an argument to counter()
// 3) use a closure (nested function)