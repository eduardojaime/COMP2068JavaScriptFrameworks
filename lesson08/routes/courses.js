const express = require("express");
const router = express.Router();
const Course = require("../models/course");
const AuthenticationMiddleware = require("../extensions/authentication");

// GET /Courses/
router.get("/", async (req, res, next) => {
  let courses = await Course.find().sort([["name", "ascending"]]);
  res.render("courses/index", { title: "Course List", dataset: courses, user: req.user });
});

// GET /Courses/Add
router.get("/add", AuthenticationMiddleware, (req, res, next) => {
  res.render("courses/add", { title: "Add a new Course", user: req.user });
});

// POST /Courses/Add
router.post("/add", AuthenticationMiddleware, async (req, res, next) => {
  let newCourse = new Course({
    name: req.body.name,
    code: req.body.code,
  });
  await newCourse.save();
  res.redirect("/courses");
});

module.exports = router;