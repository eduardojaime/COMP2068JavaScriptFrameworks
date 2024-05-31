// Routers = Controllers
// Here you will add code to configure paths within a section in the app
// Import Express and create router object
var express = require('express');
var router = express.Router();
// Configure routing rules for the router object
// All paths defined here are relative to the path defined in app.js
// e.g. app.use('/', indexRouter);
// GET // -> landing page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// GET //about -> about page
router.get("/about", function(req, res, next) {
  res.render("about", { title: "About Us"});
});
// Export the router object to make it available in app.js
module.exports = router;
