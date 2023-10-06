var express = require("express");
var router = express.Router();

/* GET home page. */
// Paths here are relative to the path associated to the object in app.js
router.get("/", function (req, res, next) {
  res.render("index", { title: "Project Tracker" });
});
// GET handler for /about
router.get("/about", (req, res, next) => {
  res.render("about", { title: "About Us" });
});

module.exports = router;
