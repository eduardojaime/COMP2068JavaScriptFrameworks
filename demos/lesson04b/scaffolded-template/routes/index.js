var express = require('express');
var router = express.Router();

/* GET home page. */
// These paths are relative to the path specified in the app.js file
// GET //
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// // GET /about
// router.get("/about", function(req, res, next) {
//   res.render("about", { title: "About Us"});
// });

module.exports = router;
