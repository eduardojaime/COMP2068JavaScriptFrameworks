// import necessary modules
const express = require("express");
// create router object
const router = express.Router();
// import Project model
const Project = require("../models/project"); // use .. to navigate one folder level up
const Course = require('../models/course');

// configure router object
// GET /projects/
router.get("/", (req, res, next) => {
    // res.render("projects/index", { title: "Project Tracker" });
    Project.find((err, projects)=>{
        if (err) { console.log(err); }
        else {
            res.render('projects/index', { title: 'Project Tracker', dataset: projects });
        }
    })
});

// GET /projects/add
router.get("/add", (req, res, next) => {
    // res.render("projects/add", { title: "Add a new Project" });
    // Get list of courses
    Course.find((err, courses) => {
        if (err) {
            console.log(err);
        }
        else {
            res.render('projects/add', { title: 'Add a New Project', courses: courses });
        }
    }).sort({ name: -1 });
});

// POST /projects/add
router.post("/add", (req, res, next) => {
    // need to use mongoose model
    // data coming from request body (input fields)
    Project.create(
    { // new project data in JSON format
        name: req.body.name,
        dueDate: req.body.dueDate,
        course: req.body.course
    },     
    (err, newProject) => { // callback function to execute after processing is complete
        if (err) { console.log(err); }
        else {
            // We can show a successful message by redirecting them to index
            res.redirect('/projects');
        }
    });
});


// GET handler for Delete operations
// :_id is a placeholder for naming whatever is after the / in the path
router.get('/delete/:_id', (req, res, next) => {
    // call remove method and pass id as a json object
    Project.remove({ _id: req.params._id }, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            res.redirect('/projects')
        }
    })
});

// GET handler for Edit operations
router.get('/edit/:_id', (req, res, next) => {
    // Find the Project by ID
    // Find available courses
    // Pass them to the view
    Project.findById(req.params._id, (err, project) => {
        if (err) {
            console.log(err);
        }
        else {
            Course.find((err, courses) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.render('projects/edit', {
                        title: 'Edit a Project',
                        project: project,
                        courses: courses
                    });
                }
            }).sort({ name: 1 });
        }
    });
});

// POST handler for Edit operations
router.post('/edit/:_id', (req,res,next) => {
    // find project based on ID
    // try updating with form values
    // redirect to /Projects
    Project.findOneAndUpdate({_id: req.params._id}, {
        name: req.body.name,
        dueDate: req.body.dueDate,
        course: req.body.course,
        status: req.body.status
    }, (err, updatedProject) => {
        if (err) {
            console.log(err)
        }
        else {
            res.redirect('/projects');
        }
    });
});

// Export this router module
module.exports = router;