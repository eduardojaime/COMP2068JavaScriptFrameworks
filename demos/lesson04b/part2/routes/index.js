// Routers = Controllers
var express = require("express");
var router = express.Router();

/* GET home page. */
// GET handler for //
router.get("/", function (req, res, next) {
  // First param is name of view file in views folder
  // views/index.hbs
  res.render("index", { title: "JS Frameworks" });
});

// GET handler for //about
router.get("/about", (req, res, next) => {
  res.render("about", { title: "About Us" });
});

module.exports = router;
