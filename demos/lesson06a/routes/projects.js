// Naming convention for routes/controllers is the entity they represent in the plural form
// Import Express and create a router object
const express = require("express");
const router = express.Router();
// Import the Model
const Project = require("../models/project");
// Define handlers
// GET /projects/
router.get("/", async (req, res, next) => {
  // Retrieve all projects in the DB sorted by due date
  let data = await Project.find().sort({ dueDate: 1 });
  // Render the view with the data
  res.render("projects/index", { title: "Project Tracker", dataset: data });
});

// GET /projects/add > when I click on the Add Button in the index page
// This path is relative to the path defined in app.js
router.get("/add", async (req, res, next) => {
  // Render the add view
  // foldername/viewname (without the extension)
  res.render("projects/add", { title: "Add a Project" });
});

// POST /projects/add > when I submit the form in the add page by clicking the Save button
router.post("/add", async (req, res, next) => {
    // Create a new project object with the data from the form
    let newProject = new Project({
        name: req.body.name, // req.body > access to input fields by id
        dueDate: req.body.dueDate,
        course: req.body.course,
        // no need to indicate Status since I'll use the default value TO DO
    })
    // Save the new project object to the DB
    await newProject.save();
    // Redirect to the index page to show the new data
    res.redirect("/projects");
});

// Export the router object
module.exports = router;
