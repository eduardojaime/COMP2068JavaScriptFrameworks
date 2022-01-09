// What is needed here?
// import necessary modules
const express = require('express');
const router = express.Router();

// Import my model
const Course = require('../models/course');

const passport = require('passport');

// Create reusable middleware function to check for a valid user or redirect to login
function IsLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect('/login');
}

// Configure my routes
// GET handler /Courses/
router.get('/', IsLoggedIn, (req, res, next) => {
    Course.find((err, courses) => {
        if (err) {
            console.log(err);
        }
        else {
            res.render('courses/index', { 
                title: 'Course List', 
                dataset: courses,
                user: req.user
            });
        }
    });
});
// GET handler for /Courses/Add
router.get('/add', IsLoggedIn, (req, res, next) => {
    res.render('courses/add', { title: 'Add a new Course', user: req.user });
});

// POST handler for /Courses/Add
router.post('/add', IsLoggedIn, (req, res, next) => {
    Course.create({
        name: req.body.name
    }, (err, newCourse)=>{
        if (err) {
            console.log(err);
        }
        else {
            res.redirect('/courses');
        }
    });
});

module.exports = router;