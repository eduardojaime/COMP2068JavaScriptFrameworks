// Import express
const express = require("express");
// create app object
const app = express();
// register middleware functions
function landingPage(req, res, next) {
  res.send("Hello this is the landing page!");
}
app.get("/", landingPage);

app.get("/about", (req, res, next) => {
    res.send("Hello there, this is the about page!");
});
// call listen()
app.listen(3000);
console.log("Running on http://localhost:3000");
