function openFuction() {
    // Scope > local block variable
    let counter = 1; // variable is created

    counter++;

    console.log(counter);
} // variable will be destroyed

openFuction();
openFuction();
// What will the output be?