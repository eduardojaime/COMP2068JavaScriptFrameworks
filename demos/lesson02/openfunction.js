// function without closures
function openFunction() {
  let counter = 1;
  counter++;
  console.log(counter);
}

// call the function twice, what values will be shown?
openFunction(); // shows 2
openFunction(); // shows 2