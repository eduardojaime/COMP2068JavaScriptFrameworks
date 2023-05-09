const express = require('express');
const router = express.Router();

const Course = require('../models/course');
// option 1 copy function here and add to every handler below
// function IsLoggedIn(req, res, next) {
//     if (req.isAuthenticated()) {
//         return next(); // moves on to the next middleware in the pipeline
//     }
//     res.redirect('/login'); // public user, send them to login
// }

router.get('/', (req, res, next) => {
    Course.find((err, courses) => {
        if (err) {
            console.log(err);
        }
        else {
            res.render('courses/index', { 
                title: 'Course List', 
                dataset: courses,
                user: req.user });
        }
    });
});

router.get('/add', (req, res, next) => {
    res.render('courses/add', { 
        title: 'Add a new Course',
        user: req.user
     });
});

router.post('/add',(req, res, next) => {
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

module.exports = router;