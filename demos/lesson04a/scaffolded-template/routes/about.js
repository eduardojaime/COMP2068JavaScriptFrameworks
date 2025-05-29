// This router object represents the /about section of the application
// I might decide to add sub-pages such as Our Team, Frameworks, etc.
// Import express and create router object
const express = require("express");
const router = express.Router();
// Configure routes relative to /about
// GET /about/
router.get("/", function (req, res, next) {
  var toolsList = [
    { name: "C#" },
    { name: "JavaScript" },
    { name: "Python" },
    { name: "Java" },
    { name: "Ruby" },
    { name: "Go" },
    { name: "Rust" },
    { name: "PHP" },
    { name: "Swift" },
    { name: "Kotlin" },
  ];
  res.render("about", { title: "About Us", tools: toolsList });
});

// Export router object
module.exports = router;
