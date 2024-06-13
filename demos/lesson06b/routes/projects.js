// Router names are in plural form
// This section contains CRUD operations for projects
// CRUD operations are Create, Read, Update, Delete
// Import Express and create router object
const express = require('express');
const router = express.Router();
const Project = require("../models/project"); // ../ means go up one level to the root folder
const Course = require("../models/course");
// Configure handlers for each route
// Note that paths are relative to path set in app.js > /projects
// GET /projects/ - List all projects 
router.get("/", async (req, res ,next) => {
    // Use mongoose data model to retrieve all projects
    let projects = await Project.find().sort([[ "dueDate", "ascending" ]]);
    res.render("projects/index", { title: "All Projects", dataset: projects });
});
// GET /projects/add - Load form to add a new project
router.get("/add", async (req, res ,next) => {
    let courseList = await Course.find().sort([[ "name", "ascending" ]]);
    res.render("projects/add", { title: "Add a New Project", courses: courseList });
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

// GET /projects/delete/66679cc47bc4944c7bec213e - Delete a project
// colon ':' is used to define a route parameter, in this case with name '_id'
router.get("/delete/:_id", async (req, res ,next) => {
    let projectId = req.params._id; 
    await Project.deleteOne({ _id: projectId });
    res.redirect("/projects");
});

// GET /projects/edit/666a431826b78e7c47b58734 - Load form to edit a project
router.get("/edit/:_id", async (req, res ,next) => {
    // Retrieve courses AND project data
    let projectId = req.params._id;
    let courseList = await Course.find().sort([[ "name", "ascending" ]]);
    let projectData = await Project.findById(projectId);
    // Send data back to view
    // Best Practice: use different names for controller and view variables
    res.render("projects/edit", { title:"Edit Project", project: projectData, courses: courseList });
});
// POST /projects/edit/666a431826b78e7c47b58734 - Save changes to a project
router.post("/edit/:_id", async (req, res ,next) => {
    let projectId = req.params._id;
    await Project.findByIdAndUpdate(
        { _id: projectId }, // _id of the document to find
        {
            name: req.body.name,
            dueDate: req.body.dueDate,
            course: req.body.course,
            status: req.body.status // include status field
        } // object containing new values
    );
});

// Export the router object
module.exports = router;