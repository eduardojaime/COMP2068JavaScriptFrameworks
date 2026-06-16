// Router Object
// Import express and create a router object
const express = require("express");
const router = express.Router();

// Configure routes
// All paths in this file are relative to the configured path in app.js
// READ - GET /projects > shows a table with all projects in the database
router.get("/", (req, res, next) => {
  // TODO - get all projects from database and pass to view
  const projects = [
    {
      name: "Assignment 01",
      dueDate: "2026-06-30",
      status: "TO DO",
    },
  ];
  res.render("projects/index", { title: "All Projects", dataset: projects });
});
// CREATE - GET /projects/new > shows an empty form to create a new project

// CREATE - POST /projects/new > receives from data and creates project in database

// UPDATE - GET /projects/edit/:id > shows a form with the project data to edit

// UPDATE - POST /projects/edit/:id > receives form data and updates project in database

// DELETE - GET /projects/delete/:id > deletes project from database and redirects to /projects

// Export the router object so it can be mounted on a path in app.js
module.exports = router;
