// controllers/routers are plural
// Import express and create router object
const express = require("express");
const router = express.Router();
// Import mongoose model to be used
const Project = require("../models/project");
const Course = require("../models/course");
// Configure GET/POST handlers
// Path relative to the one configured in app.js > /projects
// R > Retrieve/Read usually shows a list (filtered/unfiltered)
router.get("/", (req, res, next) => {
  // retrieve data
  Project.find((err, projects) => {
    if (err) console.log(err);
    else {
      // render view
      res.render("projects/index", {
        title: "Project Tracker",
        dataset: projects,
      });
    }
  });
});
// C > Create new project in DB
// GET handler for /projects/add (loads form)
router.get("/add", (req, res, next) => {
  // res.render("projects/add", { title: "Add a new Project" });
  Course.find((err, courseList)=>{
    res.render("projects/add", { title: "Add a new Project", courses: courseList });
  });
});
// POST handler for /projects/add (receives input data)
router.post("/add",(req, res, next) => {
    Project.create(
        {
            name: req.body.name,
            dueDate: req.body.dueDate,
            course: req.body.course
        }, // new project to add
        (err, newProject) => {
            res.redirect("/projects");
        } // callback function, what happens when the CREATE operation is complete?
    );
} );

// TODO U > Update a given project in DB by ID
// TODO D > Delete a project in the DB by ID

// Export router object
module.exports = router;
