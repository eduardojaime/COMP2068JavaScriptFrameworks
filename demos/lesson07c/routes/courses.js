const express = require("express");
const router = express.Router();
const Course = require("../models/course");

// GET /courses/
router.get("/", (req, res, next) => {
  Course.find((err, courses) => {
    res.render("courses/index", { title: "Course List", dataset: courses });
  });
});
// GET /courses/add
router.get("/add", (req, res, next) => {
    res.render("courses/add", {title: "Add a new Course"});
});
// POST /courses/add
router.post("/add", (req, res, next) => {
    Course.create({
        name: req.body.name,
        code: req.body.code
    }, // new course info to add
    (err, newCourse) => {
        res.redirect("/courses");
    } // callback function
    )
});

module.exports = router;
