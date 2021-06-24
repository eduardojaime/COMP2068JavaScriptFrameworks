// What is needed here?
// import necessary modules
const express = require('express');
const router = express.Router();

// Import my model
const Course = require('../models/course');

// Configure my routes
// GET handler /Courses/
router.get('/', (req, res, next) => {
    Course.find((err, courses) => {
        if (err) {
            console.log(err);
        }
        else {
            res.render('courses/index', { title: 'Course List', dataset: courses });
        }
    });
});
// GET handler for /Courses/Add
router.get('/add', (req, res, next) => {
    res.render('courses/add', { title: 'Add a new Course' });
});

// POST handler for /Courses/Add
router.post('/add', (req, res, next) => {
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