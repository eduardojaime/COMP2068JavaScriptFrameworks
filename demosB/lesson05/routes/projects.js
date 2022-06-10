// Import express and create a router object
const express = require('express');
const router = express.Router();
// Import your model
const Project = require('../models/project'); // navigate one folder up with ..
// Configure the router object by adding request handlers
// GET handler for '/Projects/' << remember routes are relative to the path declared in app.js
router.get('/', (req, res, next) => {
    // res.render('projects/index', { title: 'Welcome to Project Tracker B 2022!' });
    Project.find((err, projects)=>{
        if (err) { console.log(err); }
        else {
            res.render('projects/index', {
                title: 'Welcome to Project Tracker B 2022!',
                dataset: projects
            })
        }
    });
});

// GET handler for /Projects/Add
router.get('/add', (req, res, next) => {
    res.render('projects/add', { title: 'Add a new project' });
});

// POST handler for /Projects/Add
// recieved when user clicks SAVE button inside the form
router.post('/add', (req, res, next) => {
    Project.create(
        {
            name: req.body.name, // << extract info from request body <form> > input field with id name
            dueDate: req.body.dueDate,
            course: req.body.course
        },
        (err, newProject) => {
            if (err) { console.log(err); } // error
            else { res.redirect('/projects'); } // success
        });
});
// Export the router object
module.exports = router;