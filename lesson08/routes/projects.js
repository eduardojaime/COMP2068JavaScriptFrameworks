// Import express and create a router
const express = require('express');
const router = express.Router();
// Add reference to the models
const Project = require('../models/projects');
const Course = require('../models/course');
const passport = require('passport');

// add reusable middleware function to inject it in our handlers below that need authorization
function IsLoggedIn(req,res,next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

// Add GET for index
router.get('/', (req, res, next) => {
    // res.render('projects/index', { title: 'Project Tracker' });

    Project.find((err, projects) => {
        if (err) {
            console.log(err);
        }
        else {
            res.render('projects/index', { title: 'Project Tracker', dataset: projects, user: req.user });
        }
    })
});

router.get('/add', IsLoggedIn, (req, res, next) => {
    // Get list of courses
    Course.find((err, courses) => {
        if (err) {
            console.log(err);
        }
        else {
            res.render('projects/add', { title: 'Add a New Project', courses: courses, user: req.user });
        }
    }).sort({ name: -1 });
});

// Add POST handler
router.post('/add', IsLoggedIn, (req, res, next) => {
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


// GET handler for Delete operations
// :_id is a placeholder for naming whatever is after the / in the path
router.get('/delete/:_id', IsLoggedIn, (req, res, next) => {
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
router.get('/edit/:_id', IsLoggedIn, (req, res, next) => {
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
                        courses: courses, 
                        user: req.user
                    });
                }
            }).sort({ name: 1 });
        }
    });
});

// POST handler for Edit operations
router.post('/edit/:_id', IsLoggedIn, (req,res,next) => {
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