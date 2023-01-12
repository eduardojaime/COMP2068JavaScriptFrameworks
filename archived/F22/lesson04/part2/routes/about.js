// router object
const express = require("express");
const router = express.Router();

// Add about route
// Any path in this file is relative to the path configured in app.js
// If I configure /About in app.js all these paths will begin with that
// GET handler to /About/
router.get("/", (req, res, next) => {
  res.render("about", { title: "About Us" });
});

// Export module
module.exports = router;
