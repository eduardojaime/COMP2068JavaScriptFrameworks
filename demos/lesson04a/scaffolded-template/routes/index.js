var express = require("express");
var router = express.Router();

/* GET home page. */
// GET // > Landing page for this section
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// Option 1) About is part of Landing section
// // More granular routes can be added here
// // These are relative to the path defined in app.js
// router.get("/about", function (req, res, next) {
//   var toolsList = [
//     { name: "C#" },
//     { name: "JavaScript" },
//     { name: "Python" },
//     { name: "Java" },
//     { name: "Ruby" },
//     { name: "Go" },
//     { name: "Rust" },
//     { name: "PHP" },
//     { name: "Swift" },
//     { name: "Kotlin" }
//   ]
//   res.render("about", { title: "About Us", tools: toolsList });
// });

module.exports = router;
