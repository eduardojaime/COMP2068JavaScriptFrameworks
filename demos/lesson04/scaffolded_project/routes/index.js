var express = require('express');
// routers are the same as controllers in MVC
var router = express.Router();

/* GET / home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My First Express App' });
});

// GET /about
router.get("/about", function(req, res, next) {
  // first create about.hbs view in views folder and then call it here using res.render()
  res.render("about", { title: "About Us" });
});

module.exports = router;
