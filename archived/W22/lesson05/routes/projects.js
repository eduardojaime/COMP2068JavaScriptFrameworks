// Import express
const express = require('express');
const project = require('../models/project');
const router = express.Router();
// Import mongoose model
const Project = require('../models/project'); // .. to navigate one folder up to the root

// GET handler /projects/
router.get('/', (req, res, next) => {
    // res.render('projects/index', { title: "Welcome to Project Tracker 2022" });
    Project.find((err, projects) => {
        if (err) {
            console.log(err);
        }
        else {
            res.render('projects/index', { title: "Welcome to Project Tracker 2022", dataset: projects });
        }
    });
});

// GET handler /projects/add
router.get('/add', (req, res, next) => {
    res.render('projects/add', { title: "Enter the Project information below" });
});

// POST handler /projects/add
router.post('/add', (req, res, next) => {
    // try to add a new project
    // and redirect accordingly
    Project.create({
        name: req.body.name,
        dueDate: req.body.dueDate,
        course: req.body.course
    }, (err, newProject) => {
        if (err) {
            console.log(err);
        }
        else {
            res.redirect('/projects');
        }
    });
});

// make router available to be used in app.js
module.exports = router;