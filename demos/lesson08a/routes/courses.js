const express = require('express');
const router = express.Router();

const Course = require('../models/course');
const AuthenticationMiddleware = require("../extensions/authentication");

router.get('/', (req, res, next) => {
    Course.find((err, courses) => {
        if (err) {
            console.log(err);
        }
        else {
            res.render('courses/index', { title: 'Course List', dataset: courses, user: req.user });
        }
    });
});

router.get('/add', AuthenticationMiddleware, (req, res, next) => {
    res.render('courses/add', { title: 'Add a new Course', user: req.user });
});

router.post('/add', AuthenticationMiddleware, (req, res, next) => {
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