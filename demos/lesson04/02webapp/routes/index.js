// this will be your Controller in MVC architectural pattern
// router object, represents a section in the site
// use this for configuring paths+middlewares rules
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // renders a view by name, and passes variables back to it
  res.render('index', { title: 'Express' });
});

// Put your CRUD functionality here
// Put business logic here

module.exports = router;
