// Import express and create a router object
const express = require('express');
const router = express.Router();

// Configure routes using GET, POST, etc...
// Verb > Path & Middleware (function)
router.get('/', (req, res, next) => {
    // render view
    // res.render('projects/index', { title: 'Project Tracker' });
    Project.find((err, projects) => {
        if (err) {
            console.log(err);
        }
        else {
            res.render('projects/index', { title: 'Project Tracker', dataset: projects });
        }
    });

});

// Routes for Adding a new project
router.get('/add', (req, res, next) => {
    res.render('projects/add', { title: 'Add a new Project' });
});

// Import necessary model
const Project = require('../models/project');

router.post('/add', (req, res, next) => {
    Project.create({
        name: req.body.name,
        dueDate: req.body.dueDate,
        course: req.body.course
    }, (err, newDocument) => {
        if (err) {
            console.log(err);
        }
        else {
            res.redirect('/projects');
        }
    });
});


// Export router object to use it in app.js
module.exports = router;