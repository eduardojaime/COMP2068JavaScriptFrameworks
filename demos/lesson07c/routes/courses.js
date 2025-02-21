const express = require("express");
const router = express.Router();
const Course = require("../models/course");

// GET /Courses/
router.get("/", async (req, res, next) => {
  let courses = await Course.find().sort([["name", "ascending"]]);
  res.render("courses/index", { title: "Course List", dataset: courses });
});

// GET /Courses/Add
router.get("/add", (req, res, next) => {
  res.render("courses/add", { title: "Add a new Course" });
});

// POST /Courses/Add
router.post("/add", async (req, res, next) => {
  let newCourse = new Course({
    name: req.body.name,
    code: req.body.code,
  });
  await newCourse.save();
  res.redirect("/courses");
});

module.exports = router;