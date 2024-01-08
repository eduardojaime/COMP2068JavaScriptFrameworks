// Naming convention > controllers/routers are plural
// Import express and create router object
const express = require("express");
const router = express.Router();
// Import mongoose model to be used
const Project = require("../models/project");
// Configure GET/POST handlers
// Path relative to the one configured in app.js > /projects
// GET /projects/
router.get("/", async (req, res, next) => {
    // retrieve ALL data, and sort by dueDate
    let projects = await Project.find().sort([["dueDate", "descending"]]);
    // render view
    res.render("projects/index", { 
        title: "Project Tracker",
        dataset: projects
    })
});
// GET /projects/add
router.get('/add', (req, res, next) => {
    res.render('projects/add', { title: 'Add a New Project' });
});

// POST /projects/add
router.post('/add', async (req, res, next) => {
    // use the project module to save data to DB
    // use the new Project() method of the model 
    // and map the fields with data from the request
    // newProject object is returned if operation was successful
    // save changes and redirect
    let newProject = new Project({
        name: req.body.name,
        dueDate: req.body.dueDate,
        course: req.body.course
    });
    await newProject.save();
    res.redirect('/projects');
});
// Export router object
module.exports = router;