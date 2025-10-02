// Import express and create router object
const express = require("express");
const router = express.Router();
// Import the Project model
const Project = require("../models/project");
// Configure route handlers
// GET /projects/ - List all projects
router.get("/", async (req, res, next) => {
  let projects = await Project.find().sort({ dueDate: 1 });
  // Path is views/projects/index.hbs
  res.render("projects/index", { title: "Projects", projects: projects });
});
// Export the router object for use in app.js
module.exports = router;
