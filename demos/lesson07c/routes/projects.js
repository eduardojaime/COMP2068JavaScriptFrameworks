// Router/Controller names are in plural form
// Import express
const express = require("express");
// Create a router object
const router = express.Router();
// Import the project model to use in this file
const Project = require("../models/project"); // '../' to go up one directory level
// Configure handlers, relative to the path configured in app.js
// GET /projects/ > Get all projects
// make middleware function async so we can call await on the model
router.get("/", async (req, res, next) => {
    let projectList = await Project.find(); // finds everything, no filters
    res.render("projects/index", { title: "Projects", dataset: projectList });
});

// GET /projects/add > Loads the add project form
router.get("/add", (req, res, next) => {
    res.render("projects/add", { title: "Add a Project" });
});
// POST /projects/add > Receives the data from the form and creates a project
router.post("/add", async (req, res, next) => {
    // this triggers when the user clicks on the Save button
    // create an instance of the Project model
    let newProject = new Project({
        name: req.body.name, // request body, input field id=name
        dueDate: req.body.dueDate, 
        course: req.body.course,
        // no need to set status, it has a default value
    });
    // save to the db
    await newProject.save();
    // assume success and redirect to the projects list
    res.redirect("/projects");
});

// GET /projects/edit/:_id > Loads the edit project form with the data
// http://localhost:3000/projects/edit/670477dfa6b3cdad49dbe4fe
router.get("/edit/:_id", async (req, res, next) => {
    // retrieve ID from URL
    let projectId = req.params._id; // gives me 670477dfa6b3cdad49dbe4fe
    // find the project by ID
    let projectData = await Project.findById(projectId);
    // render the edit form with the project data
    res.render("projects/edit", { title: "Edit Project", project: projectData });
});

// POST /projects/edit/:_id > Receives the data from the form and updates the project
router.post("/edit/:_id", async (req, res, next) => {
    // retrieve ID from URL
    let projectId = req.params._id;
    // find the project by ID and update by passing the new data
    await Project.findByIdAndUpdate(projectId, {
        name: req.body.name,
        dueDate: req.body.dueDate,
        course: req.body.course,
        status: req.body.status,
    });
    // assume success and redirect to projects
    res.redirect("/projects");
});

// GET /projects/delete/:_id > Deletes the project
router.get("/delete/:_id", async (req, res, next) => {
    // retrieve ID from URL
    let projectId = req.params._id;
    // find the project by ID and remove it
    await Project.findOneAndDelete({ _id: projectId });
    // assume success and redirect to projects
    res.redirect("/projects");
});

// Export the router object for use in app.js
module.exports = router;