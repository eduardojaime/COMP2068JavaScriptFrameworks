// Naming convention > routers are plural
// Import express and create a router object
const express = require("express");
const router = express.Router();
// Import Model for performing DB Operations
const Project = require("../models/project"); // use .. to navigate one folder up
const Course = require("../models/course");
// Configure GET/POST handlers
// GET /Projects/
router.get("/", async (req, res, next) => {
    let projects = await Project.find().sort([["dueDate", "descending"]]);
    // relative to the views folder
    res.render("projects/index", { title: "Projects", dataset: projects });
});

// CREATE Functionality
// GET /Projects/Add > Loading the page with the form
router.get("/add", async (req, res, next) => {
    let courseList = await Course.find().sort([["name", "ascending"]]);
    res.render("projects/add", { title: "Add a new Project", courses: courseList });
});
// POST /Projects/Add > When user fills in the form and clicks Save button
router.post("/add", async (req, res, next) => {
    // Use the model to create a new Project and save it in the DB
    let newProject = new Project({
        name: req.body.name, // req.body = form input fields
        dueDate: req.body.dueDate,
        course: req.body.course
    });
    await newProject.save();
    res.redirect("/projects");
});

// Export router module
module.exports = router;