const express = require("express");
const router = express.Router();
const Course = require("../models/course");
// Reusable function to check whether user is authenticated
function IsLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next(); // continue processing request
  }
  res.redirect("/login"); // not authenticated
}
// GET handler for /courses/
router.get("/", (req, res, next) => {
  Course.find((err, courses) => {
    if (err) {
      console.log(err);
    } else {
      res.render("courses/index", {
        title: "Courses",
        dataset: courses,
        user: req.user,
      });
    }
  });
});

// GET handler for /courses/add
router.get("/add", IsLoggedIn, (req, res, next) => {
  res.render("courses/add", {
    title: "Add a new Course",
    user: req.user,
  });
});

// POST handler for /courses/add
router.post("/add", IsLoggedIn, (req, res, next) => {
  // DB INSERT operation
  Course.create(
    {
      name: req.body.name,
    },
    (err, newCourse) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/courses");
      }
    }
  );
});

module.exports = router;
