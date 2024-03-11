const express = require("express");
const router = express.Router();
const Course = require("../models/course");

// GET /Courses/ (list)
router.get("/", async (req, res, next) => {
  let courses = await Course.find().sort([["name", "ascending"]]);
  res.render("courses/index", {
    title: "Course List",
    dataset: courses,
    user: req.user,
  });
});

// GET /Courses/Add (load form)
router.get("/add", (req, res, next) => {
  res.render("courses/add", { title: "Add a New Course", user: req.user });
});

// POST /Courses/Add (click on SAVE button in form)
router.post("/add", async (req, res, next) => {
  let newCourse = new Course({
    code: req.body.code,
    name: req.body.name,
  });
  await newCourse.save();
  res.redirect("/courses");
});

module.exports = router;
