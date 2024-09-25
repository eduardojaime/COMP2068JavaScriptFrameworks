// Controller or Router Object for the root path of the application
var express = require('express');
// Create a router object
var router = express.Router();

// Define routes and middleware
// Most common ones are router.get() and router.post()
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Export the router object so you can use it in app.js to associate it to paths
module.exports = router;
