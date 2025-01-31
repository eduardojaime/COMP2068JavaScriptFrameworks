var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// GET /about
router.get("/about", function(req, res, next) {
  // res.render() is used for rendering a view
  // views are located in the 'views' folder
  // about is the name of a view file (about.hbs)
  res.render("about", { title: "About" });
});

module.exports = router;
