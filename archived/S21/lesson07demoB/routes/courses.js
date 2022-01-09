// Router/Controller 
// Step 1 Import all the necessary modules
const express = require('express');
const router = express.Router();
// Also import this...
const Course = require('../models/course');

// Step 2 Define routes and middleware > 3 operations: show all courses, get to add, post to add
// GET handler for /courses
router.get('/', (req, res, next) => {
    Course.find((err, courses) => {
        if (err) {
            console.log(err);
        }
        else {
            // I have a list of courses?? how to send them back to the view?
            res.render('courses/index', {
                title: 'Course List',
                dataset: courses
            });
        }
    });
});

// GET handler for /courses/add
router.get('/add', (req, res, next) => {
    res.render('courses/add', { title: 'Add a new Course' });
});

// POST handler for /courses/add
router.post('/add', (req, res, next) => {
    // Use the ?? object to create a new document
    Course.create({
        name: req.body.name
    }, (err, newCourse) => {
        if (err) {
            console.log(err);
        }
        else {
            res.redirect('/courses');
        }
    });
});

// Step 3 Export the router object
module.exports = router;