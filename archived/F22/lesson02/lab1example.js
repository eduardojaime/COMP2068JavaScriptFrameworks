// Lab 1 Rock-Paper-Scissors
// PROMPT EXAMPLE
var prompt = require("prompt");
prompt.start();
// INPUT
// SHOW INSTRUCTIONS TO THE USER
// PROMPT.GET() TO RETRIEVE USER INPUT
prompt.get(["username", "email"], function (err, result) {
  // PROCESS
  // INSIDE THE CALLBACK FUNCTION OF THE GET()
  // GENERATE COMPUTER SELECTION
  // COMPARE BOTH SELECTIONS

  // OUTPUT
  // CONSOLE.LOG()
  console.log("Command-line input received:");
  console.log("  username: " + result.username);
  console.log("  email: " + result.email);
});
