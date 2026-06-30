var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// All paths in this file are relative to the configured path in app.js
// GET /about
router.get("/about", (req, res, next) => {
  // any processing logic goes here
  // render a view, standard is to name it the same as the path
  res.render("about", { title: "About Us" });
});

module.exports = router;
