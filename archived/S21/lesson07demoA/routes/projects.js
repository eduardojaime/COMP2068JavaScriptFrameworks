// Import express and create a router object
const express = require('express');
const router = express.Router();

// Import necessary model
const Project = require('../models/project');
const Course = require('../models/course');

// Configure routes using GET, POST, etc...
// Verb > Path & Middleware (function)
router.get('/', (req, res, next) => {
    // render view
    // res.render('projects/index', { title: 'Project Tracker' });
    // TODO: Retrieve duedate and convert from UTC
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
    // res.render('projects/add', { title: 'Add a new Project' });
    // find all the courses in the database and sort them by name alphabetically
    Course.find((err, courses) => {
        if (err) {
            console.log(err);
        }
        else {
            // ??? how do I send courses back?
            res.render('projects/add', {
                title: 'Add a new Project',
                courses: courses
            });
        }
    }).sort({ name: 1 });
});

router.post('/add', (req, res, next) => {
    // TODO: convert date to UTC before saving it
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

// GET handler for /projects/delete/:_id
// colon (:) means parameter
router.get('/delete/:_id', (req, res, next) => {
    Project.remove({ _id: req.params._id }, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            res.redirect('/projects');
        }
    });
});

// GET handler for /projects/edit/:_id
router.get('/edit/:_id', (req, res, next) => {
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
            });
        }
    });
});

// POST handler for /projects/edit/:_id
router.post('/edit/:_id', (req, res, next) => {
    // find one and update
    // ID, JSON OBJECT, CALLBACK FUNCTION
    Project.findOneAndUpdate(
        {
            _id: req.params._id
        },
        {
            name: req.body.name,
            dueDate: req.body.dueDate,
            course: req.body.course,
            status: req.body.status
        }, (err, updatedProject) => {
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