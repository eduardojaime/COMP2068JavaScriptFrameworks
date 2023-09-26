var express = require("express");
var router = express.Router();

/* GET home page. */
// these paths are relative to the path configured in app.js > "/"
// GET // > /
router.get("/", function (req, res, next) {
  res.render("index", { title: "JS Frameworks" });
});

router.get("/about", (req, res, next) => {
  res.render("about", { title: "About Us" });
});

module.exports = router;
