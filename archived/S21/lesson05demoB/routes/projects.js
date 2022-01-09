// Import express and create router object
const express = require('express');
const router = express.Router();

// import model into router
const Project = require('../models/project');

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
    res.render('projects/add', { title: 'Add a new Project' });
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


// Export the router object so that it's available in my app.js
module.exports = router;