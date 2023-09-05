const express = require("express");
const router = express.Router();
const Course = require("../models/course");

// GET handler for /courses/
router.get("/", (req, res, next) => {
    Course.find((err, courses) => {
        if (err) {console.log(err);}
        else {
            res.render("courses/index", { title: "Courses", dataset: courses });
        }
    });
});

// GET handler for /courses/add
router.get("/add", (req, res, next) => {
  res.render("courses/add", { title: "Add a new Course" });
});

// POST handler for /courses/add
router.post("/add", (req, res, next) => {
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
