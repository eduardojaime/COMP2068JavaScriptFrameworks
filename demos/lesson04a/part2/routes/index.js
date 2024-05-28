// Import express and create a router object
var express = require('express');
var router = express.Router();
// Configure a route to respond to GET requests to the root URL
// e.g. http://localhost:3000/
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get("/about", function(req, res, next) {
  res.render("about", { title: "About" });
});
// Export the router object so you can import it in app.js
// and configure the application object to use it for a specific path
// e.g  app.use('/', indexRouter);
module.exports = router;
