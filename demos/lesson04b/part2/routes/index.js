// Router Objects = Controllers
// Import express and create a router object
var express = require("express");
var router = express.Router();
// Configure route handling in the router object
// Registering a middleware function to a path
// All paths in this file are relative to the path defined in app.js
// e.g. app.use('/', indexRouter);
/* GET home page. */
router.get("/", function (req, res, next) {
  // Takes the HTML code from index.hbs located in the Views folder
  // and renders it as an HTML response
  res.render("index", { title: "Express" });
});
// GET /about
router.get("/about", function (req, res, next) {
  res.render("about", { title: "About" });
});
// Export the router object to make it available in app.js
module.exports = router;
