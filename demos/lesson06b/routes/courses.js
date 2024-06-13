const express = require('express');
const router = express.Router();
const Course = require('../models/course');
// READ - List all courses (GET)
router.get("/", async (req, res, next)=>{
    // make sure to use await to wait for the operation to complete
    // otherwise, the courses variable will be empty and nothing will be shown in the view
    let courses = await Course.find().sort({name: 1});
    res.render("courses/index", { title: "Courses", dataset: courses });
});
// CREATE - Show the form to add a course (GET)
router.get("/add", (req, res, next)=>{
    res.render("courses/add", { title: "Add a Course" });
});
// CREATE - Save the course (POST)
router.post("/add", async (req, res, next)=>{
    let newCourse = new Course({
        name: req.body.name, // input field id=name
        code: req.body.code // input field id=code
    });
    // use await to let this operation finish
    await newCourse.save();
    res.redirect("/courses"); // redirect to main path associated to this controller
});
module.exports = router;