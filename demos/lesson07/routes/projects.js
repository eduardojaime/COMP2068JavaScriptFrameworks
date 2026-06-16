// Router Object
// Import express and create a router object
const express = require("express");
const router = express.Router();
// Import the project model to interact with the database
const Project = require("../models/project");

// Configure routes
// All paths in this file are relative to the configured path in app.js
// READ - GET /projects > shows a table with all projects in the database
router.get("/", async (req, res, next) => {
  // Retrieve all projects from database (no filter) and pass them to the view
  const projects = await Project.find();
  console.log(projects);
  res.render("projects/index", { title: "All Projects", dataset: projects });``
});
// CREATE - GET /projects/new > shows an empty form to create a new project
router.get("/new", (req, res, next) => {
  res.render("projects/new", { title: "Create New Project" });
});

// CREATE - POST /projects/new > receives from data and creates project in database
router.post("/new", async (req, res, next) => {
  const newProject = new Project({
    name: req.body.name,
    dueDate: req.body.dueDate
  });
  await newProject.save();
  res.redirect("/projects");
});

// UPDATE - GET /projects/edit/:id > shows a form with the project data to edit

// UPDATE - POST /projects/edit/:id > receives form data and updates project in database

// DELETE - GET /projects/delete/:id > deletes project from database and redirects to /projects

// Export the router object so it can be mounted on a path in app.js
module.exports = router;
