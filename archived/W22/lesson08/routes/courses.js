const express = require('express');
const router = express.Router();
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

// GET handler for '/Courses'
router.get('/', (req, res, next) => {
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

// GET handler for '/Courses/Add'
router.get('/add', IsLoggedIn, (req, res, next) => {
    res.render('courses/add', { 
        title: 'Add a new Course',
        user: req.user 
    });
});

// POST handler for '/Courses/Add'
router.post('/add', IsLoggedIn, (req, res, next) => {
    Course.create({
        name: req.body.name
    }, (err, newCourse) => {
        if (err) {
            console.log(err);
        }
        else {
            res.redirect('/courses');
        }
    })
});

module.exports = router;