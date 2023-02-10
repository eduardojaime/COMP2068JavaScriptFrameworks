// import necessary modules
const express = require("express");
// create router object
const router = express.Router();
// import Project model
const Project = require("../models/project"); // use .. to navigate one folder level up
// configure router object
// GET /projects/
router.get("/", (req, res, next) => {
  res.render("projects/index", { title: "Project Tracker" });
});
// GET /projects/add
router.get("/add", (req, res, next) => {
  res.render("projects/add", { title: "Add a new Project" });
});
// POST /projects/add
router.post("/add", (req, res, next) => {
  // need to use mongoose model
  // data coming from request body (input fields)
  Project.create(
    { // new project data in JSON format
      name: req.body.name,
      dueDate: req.body.dueDate,
      course: req.body.course,
    },
    (err, newProject) => { // callback function to execute after processing is complete
        if (err) { console.log(err); }
        else {
            res.redirect('/projects');
        }
    }
  );
});

// export router object
module.exports = router;
