// use when your program depends on the order of execution of your code
// execution pauses when there's a call to an external service, such as reading a file
// program resumes execution once call is done
// import fs module to access file system
const fs = require('fs');
// call the readFileSync method (synchronous, meaning it'll pause the program until it reads all the file)
let food = fs.readFileSync('food.txt', 'utf-8');
// print list to the console
console.log(food);
console.log('Delicious food indeed!');
// call the readFileSync method (synchronous, meaning it'll pause the program until it reads all the file)
let drinks = fs.readFileSync('drinks.txt', 'utf-8');
// print list to the console
console.log(drinks);
console.log('We had all these drinks at lunch!');

// OUTPUT > What do you expect to see in the terminal?
// food list, delicious, drinks list, lunch!
