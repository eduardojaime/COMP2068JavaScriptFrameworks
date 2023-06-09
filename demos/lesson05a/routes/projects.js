// Import express and create router object
const express = require("express");
const router = express.Router();
// import mongoose model in order to interact with the DB
const Project = require("../models/project"); // .. navigates a folder up
// Configure router object with request handlers
// GET handler for /Projects/
router.get("/", (req, res, next) => {
  // TODO: Retrieve all projects from DB
  // res.render("projects/index", { title: "Project Tracker" });
  // find all projects and show
  // Project
  //   .find()
  //   .then((err, projects) => {
  //     res.render("projects/index", {
  //       title: "Project Tracker",
  //       dataset: projects,
  //     });
  //   })
  //   .catch(function (err) {
  //     console.log(err);
  //   });
  Project.find((err, projects) => {
    if (err) {
      console.log(err);
    }
    else {
      res.render("projects/index", {
            title: "Project Tracker",
            dataset: projects,
          });
    }
  });
});

// GET handler for /Projects/Add > shows empty form for users to fill in
router.get("/add", (req, res, next) => {
  res.render("projects/add", { title: "Add a New Project" });
});

// POST handler for /Projects/Add > triggered when users click the SAVE button in the form
router.post("/add", (req, res, next) => {
  // Use the Project mongoose model to pass information from the form and create a new
  // document in the mongodb
  Project.create(
    {
      name: req.body.name,
      dueDate: req.body.dueDate,
      course: req.body.course,
    },
    (err, newProject) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/projects"); // success redirect to projects page
      }
    }
  );
});
// Export router object
module.exports = router;
