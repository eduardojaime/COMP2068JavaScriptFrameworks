const express = require('express');
const router = express.Router();

const Course = require('../models/course');
const passport = require('passport');

function IsLoggedIn(req,res,next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

router.get('/', IsLoggedIn, (req, res, next) => {
    Course.find((err, courses) => {
        if (err) {
            console.log(err);
        }
        else {
            res.render('courses/index', { title: 'Course List', dataset: courses, user: req.user });
        }
    });
});

router.get('/add', IsLoggedIn, (req, res, next) => {
    res.render('courses/add', { title: 'Add a new Course', user: req.user });
});

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
    });
});

module.exports = router;