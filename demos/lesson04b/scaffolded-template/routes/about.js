// This is a router object
// It contains routing configuration for the About section
// sub-pages will be added later
// Import Express and create router object
const express = require('express');
const router = express.Router();
// Configure routing
// GET /about/
router.get("/", (req, res, next) => {
  res.render("about", { title: "About Us" });
});

// Export the router object
module.exports = router;