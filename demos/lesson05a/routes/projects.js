// Import express and create router object
const express = require("express");
const router = express.Router();
// Configure router object with request handlers
// GET handler for /Projects/
router.get("/", (req, res, next) => {
  // TODO: Retrieve all projects from DB
  res.render("projects/index", { title: "Project Tracker" });
});
// Export router object
module.exports = router;
