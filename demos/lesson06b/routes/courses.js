const express = require("express");
const router = express.Router();
const Course = require("../models/course");

// GET /
router.get("/", (req, res, next) => {
  Course.find((err, data) => {
    res.render("courses/index", { title: "Course List", dataset: data });
  });
});

// GET /ADD
router.get("/add", (req, res, next) => {
    res.render("courses/add", { title: "Add a new Course"});
});

// POST /ADD
router.post("/add", (req, res, next) => {
    Course.create({
        name: req.body.name,
        code: req.body.code
    }, (err, newCourse) => {
        res.redirect("/courses");
    })
});

module.exports = router;
