// Import express and create a router object
const express = require("express");
const router = express.Router();
const Project = require("../models/project");

// configure router object

// This router will be configured to the path /projects in app.js

// GET handler for /projects/  << landing/root page of my section
router.get("/", (req, res, next) => {
  // res.render("projects/index", { title: "Project Tracker 2022" });
  Project.find((err, projects) => {
    if (err) {
      console.log(err);
    } else {
      res.render("projects/index", {
        title: "Project Tracker 2022",
        dataset: projects,
      });
    }
  });
});

// GET handler for /projects/add
router.get("/add", (req, res, next) => {
  res.render("projects/add", { title: "Add a New Project" });
});

// POST handler for /projects/add > this happens when I press the save button
router.post("/add", (req, res, next) => {
  // Use mongoose Project model to create a new project in my db with the info from the form
  Project.create(
    {
      // object to add
      name: req.body.name,
      dueDate: req.body.dueDate,
      course: req.body.course,
    },
    (err, newProject) => {
      // error handling
      if (err) {
        console.log(err);
      } else {
        res.redirect("/projects");
      }
    }
  );
});

// export the router object to make it available in app.js
module.exports = router;
