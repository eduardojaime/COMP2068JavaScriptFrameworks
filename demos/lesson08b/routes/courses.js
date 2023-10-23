const express = require("express");
const router = express.Router();
const Course = require("../models/course");

function IsLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

// GET /
router.get("/", (req, res, next) => {
  Course.find((err, data) => {
    res.render("courses/index", {
      title: "Course List",
      dataset: data,
      user: req.user,
    });
  });
});

// GET /ADD
router.get("/add", IsLoggedIn, (req, res, next) => {
  res.render("courses/add", { title: "Add a new Course", user: req.user });
});

// POST /ADD
router.post("/add", IsLoggedIn, (req, res, next) => {
  Course.create(
    {
      name: req.body.name,
      code: req.body.code,
    },
    (err, newCourse) => {
      res.redirect("/courses");
    }
  );
});

module.exports = router;
