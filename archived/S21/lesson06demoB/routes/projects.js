// Import express and create router object
const express = require('express');
const router = express.Router();

// import model into router
const Project = require('../models/project');
const Course = require('../models/course');

// use the router object to associate a Path with a Middleware (function)
// Path is the part of your URL after / 
// e.g. localhost:3000/Projects > path is /projects
// Route is the rule > combination of path and middleware
router.get('/', (req, res, next) => {
    // res.render('projects/index', { title: 'Project Tracker' });
    Project.find((err, projects) => {
        if (err) {
            console.log(err);
        }
        else {
            res.render('projects/index', {
                title: 'Project Tracker',
                dataset: projects
            });
        }
    });
});

// Route for GET to /Projects/Add
router.get('/add', (req, res, next) => {
    // res.render('projects/add', { title: 'Add a new Project' });
    // How can I return a list of courses?
    Course.find((err, courses) => {
        if (err) {
            console.log(err);
        }
        else {
            res.render('projects/add', {
                title: 'Add a new Project',
                courses: courses
            });
        }
    }).sort({ name: 1 });
});

// configure the route to handle POST to /add
router.post('/add', (req, res, next) => {
    Project.create(
        {
            name: req.body.name,
            dueDate: req.body.dueDate,
            course: req.body.course
        },
        (err, newProject) => {
            if (err) {
                console.log(err);
            }
            else {
                res.redirect('/projects');
            }
        }
    );
});

// GET handler for /projects/delete/_id
router.get('/delete/:_id', (req, res, next) => {
    Project.remove(
        {
            _id: req.params._id
        },
        (err) => {
            if (err) {
                console.log(err);
            }
            else {
                res.redirect('/projects');
            }
        });
});

// GET handler for /projects/edit/_id 
router.get('/edit/:_id', (req, res, next) => {
    // res.render('projects/edit', { title: 'Update a Project' });
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
                        title: 'Update a Project',
                        project: project,
                        courses: courses
                    })
                }
            }).sort({ name: 1 });
        }
    })
});
// POST handler for /projects/edit/id
router.post('/edit/:_id', (req, res, next) => {
    Project.findOneAndUpdate(
        {   // filter to identify the document in the DB
            _id: req.params._id
        }, 
        {   // new information as a JSON object
            name: req.body.name,
            dueDate: req.body.dueDate,
            course: req.body.course,
            status: req.body.status
        }, 
        (err, updatedProject) => { // call back function
            if (err) {
                console.log(err);
            }
            else {
                res.redirect('/projects');
            }
        } 
    )
});

// Export the router object so that it's available in my app.js
module.exports = router;