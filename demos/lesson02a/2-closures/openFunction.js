// let globalVar = 100;
// closed functions do not remember their data
function openFunction() {
    // what scope is this?? local
    let counter = 1; // declare variable
    counter++; // modify variable value
    console.log(counter); // print current value
    // console.log(globalVar); // 100
}
// console.log(counter); // null
// console.log(globalVar); // 100
// call open function twice
openFunction();
openFunction();
// output??
// A: 2 3 
// B: 2 2