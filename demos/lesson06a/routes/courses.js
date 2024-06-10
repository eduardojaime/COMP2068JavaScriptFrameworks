const express = require('express');
const router = express.Router();
const Course = require("../models/course");
// GET: /courses > displays table of courses
// Path is relative to the path defined in app.js
// e.g. /Courses/
router.get("/", async (req, res, next) => {
    // find() is async, so use await to wait for the result
    let courses = await Course.find().sort([["name", "ascending"]]);
    res.render("courses/index", { title: "Course List", dataset: courses });
});
// GET: /courses/add > displays form to add a course
router.get("/add", (req, res, next) => {
    res.render("courses/add", { title: "Add a Course" });
});
// POST: /courses/add > process form submission and saves to database
router.post("/add", async (req, res, next) => {
    let newCourse = new Course({
        code: req.body.code,
        name: req.body.name,
    });
    await newCourse.save();
    res.redirect("/courses");
});
// always add before anything else so you don't forget
module.exports = router;