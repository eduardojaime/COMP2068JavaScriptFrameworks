// Import express and create a router
const express = require('express');
const router = express.Router();
// Add reference to the projects model
const Project = require('../models/project');

// Add GET for index
router.get('/', (req, res, next) => {
    // res.render('projects/index', { title: 'Project Tracker' });
    Project.find((err, projects) => {
        if (err) {
            console.log(err);
        }
        else {
            res.render('projects/index', { title: 'Project Tracker', dataset: projects });
        }
    })
});

router.get('/add', (req, res, next) => {
    res.render('projects/add', { title: 'Add a New Project' });
});

router.post('/add', (req, res, next) => {
    // use the project module to save data to DB
    // call create method of the model 
    // and map the fields with data from the request
    // callback function will return an error if any or a newProject object
    Project.create({
        name: req.body.name,
        dueDate: req.body.dueDate,
        course: req.body.course
    }, (err, newProject) => {
        if (err) {
            console.log(err);
        }
        else {
            // We can show a successful message by redirecting them to index
            res.redirect('/projects');
        }
    });
});

// Export this router module
module.exports = router;