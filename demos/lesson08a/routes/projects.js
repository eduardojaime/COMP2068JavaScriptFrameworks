// Route handlers for /projects section
const express = require("express");
const router = express.Router();
// TODO Implement CRUD operations for projects
// Note these paths are relative to /projects configured in app.js
// GET /projects/
router.get("/", (req, res, next) => {
  // Render the project list view (./views/projects/index.hbs)
  res.render("projects/index", { title: "Project List" });
});

// Export the router to be used in app.js
module.exports = router;
