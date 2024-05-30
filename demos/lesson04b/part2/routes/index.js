// Router Objects = Controllers
// Import express and create a router object
var express = require('express');
var router = express.Router();
// Configure route handling in the router object
// Registering a middleware function to a path
/* GET home page. */
router.get('/', function(req, res, next) {
  // Takes the HTML code from index.hbs located in the Views folder
  // and renders it as an HTML response
  res.render('index', { title: 'Express' });
});
// Export the router object to make it available in app.js
module.exports = router;
