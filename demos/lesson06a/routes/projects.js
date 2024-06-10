// Router names are in plural form
// This section contains CRUD operations for projects
// CRUD operations are Create, Read, Update, Delete
// Import Express and create router object
const express = require('express');
const router = express.Router();
const Project = require("../models/project"); // ../ means go up one level to the root folder
// Configure handlers for each route
// Note that paths are relative to path set in app.js > /projects
// GET /projects/ - List all projects 
router.get("/", async (req, res ,next) => {
    // Use mongoose data model to retrieve all projects
    let projects = await Project.find().sort([[ "dueDate", "ascending" ]]);
    res.render("projects/index", { title: "All Projects", dataset: projects });
});
// GET /projects/add - Load form to add a new project
router.get("/add", (req, res ,next) => {
    res.render("projects/add", { title: "Add a New Project" });
});
// POST /projects/add - Save a new project
router.post("/add", async (req, res ,next) => {
    // Use mongoose data model to create a new project object
    let newProject =  new Project({
        name: req.body.name,
        dueDate: req.body.dueDate,
        course: req.body.course,
    });
    // Save the newly created project to the db (async operation)
    await newProject.save();
    // Redirect to the list of projects page
    res.redirect("/projects");
});
// Export the router object
module.exports = router;