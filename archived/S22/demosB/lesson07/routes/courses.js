const express = require('express');
const router = express.Router();
const Course = require('../models/course');

// GET handlers for /Courses/
router.get('/', (req, res, next) => {
    Course.find((err, courses)=>{
        if (err) {console.log(err);}
        else {
            res.render('courses/index', {title:'Available Courses', dataset: courses});
        }
    });
});

// GET handler for /Courses/Add
router.get('/add', (req, res, next) => {
    res.render('courses/add', {title:'Add a new Course'});
});

// POST handler for /Courses/Add
router.post('/add', (req, res, next) => {
    Course.create(
        {
            name: req.body.name
        },
        (err, newCourse) =>{
            if (err) {console.log(err);}
            else {
                res.redirect('/courses');
            }
        }
    );
});

module.exports = router;