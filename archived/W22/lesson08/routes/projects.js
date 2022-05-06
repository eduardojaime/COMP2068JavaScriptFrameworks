// Import express
const express = require('express');
const router = express.Router();
// Import mongoose model
const Project = require('../models/project'); // .. to navigate one folder up to the root
const Course = require('../models/course');

// CREATE REUSABLE MIDDLEWARE FUNCTION
function IsLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    else {
        res.redirect('/login');
    }
}

// GET handler /projects/
router.get('/', (req, res, next) => {
    Project.find((err, projects) => {
        if (err) {
            console.log(err);
        }
        else {
            res.render('projects/index', { 
                title: "Welcome to Project Tracker 2022", 
                dataset: projects,
                user: req.user // where is this value coming from? where is the session stored? 
            });
        }
    });
});

// GET handler /projects/add
// handlers accept: 'route', and list of middleware function
router.get('/add', IsLoggedIn, (req, res, next) => {
    Course.find((err, courses)=>{
        if (err) {
            console.log(err);
        }
        else {
            res.render('projects/add', { 
                title: "Enter the Project information below", 
                courses: courses,
                user: req.user  });
        }
    });
});

// POST handler /projects/add
router.post('/add', IsLoggedIn, (req, res, next) => {
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

// GET handler for /Projects/Delete
// : indicates a parameter name
router.get('/delete/:_id', IsLoggedIn, (req, res, next) => {
    Project.remove({
        _id: req.params._id
    }, (err) => {
        if (err) {
            console.log(err);
        }
        else  {
            res.redirect('/projects');
        }            
    });
});

// GET handler for projects/edit
router.get('/edit/:_id', IsLoggedIn, (req, res, next) => {
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
                        title: 'Edit a project',
                        project: project,
                        courses: courses,
                        user: req.user 
                    });
                }
            });
        }
    })
});

// POST handler for projects/edit
router.post('/edit/:_id', IsLoggedIn, (req,res,next)=>{
    Project.findOneAndUpdate(
        {
            _id: req.params._id
        }, 
        {
            name: req.body.name,
            dueDate: req.body.dueDate,
            course: req.body.course,
            status: req.body.status
        }, 
        (err, updatedProject)=>{
            if(err) {
                console.log(err);
            }
            else {
                res.redirect('/projects');
            }
    })
});

// make router available to be used in app.js
module.exports = router;