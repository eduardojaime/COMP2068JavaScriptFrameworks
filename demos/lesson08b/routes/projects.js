// Import express and create a router
const express = require("express");
const router = express.Router();
// Add reference to the projects model
const Project = require("../models/project");
const Course = require("../models/course");

// add reusable middleware function to inject it in our handlers below that need authorization
function IsLoggedIn(req,res,next) {
  if (req.isAuthenticated()) {
      return next();
  }
  res.redirect('/login');
}

// Add GET for index
router.get("/", (req, res, next) => {
  // res.render('projects/index', { title: 'Project Tracker' });
  Project.find((err, projects) => {
    if (err) {
      console.log(err);
    } else {
      res.render("projects/index", {
        title: "Project Tracker",
        dataset: projects,
      });
    }
  });
});

router.get("/add", IsLoggedIn, (req, res, next) => {
  // res.render('projects/add', { title: 'Add a New Project' });
  Course.find((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.render("projects/add", {
        title: "Add a New Project",
        courses: data,
      });
    }
  });
});

router.post("/add", IsLoggedIn, (req, res, next) => {
  // use the project module to save data to DB
  // call create method of the model
  // and map the fields with data from the request
  // callback function will return an error if any or a newProject object
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
        // We can show a successful message by redirecting them to index
        res.redirect("/projects");
      }
    }
  );
});

// GET /delete/_id
// access parameters via req.params object
router.get("/delete/:_id", IsLoggedIn, (req, res, next) => {
  let projectId = req.params._id;
  Project.remove({ _id: projectId }, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/projects");
    }
  });
});

// GET /edit/_id
router.get("/edit/:_id", IsLoggedIn, (req, res, next) => {
  let projectId = req.params._id;
  Project.findById(projectId, (err, projectData) => {
    Course.find((err, courseData) => {
      res.render("projects/edit", {
        title: "Edit Project Info",
        project: projectData,
        courses: courseData,
      });
    });
  });
});

// POST /edit/_id
router.post("/edit/:_id", IsLoggedIn, (req, res, next) => {
  let projectId = req.params._id;
  Project.findOneAndUpdate(
    { _id: projectId }, // filter to find the project to update
    {
      // updated data
      name: req.body.name,
      dueDate: req.body.dueDate,
      course: req.body.course,
      status: req.body.status,
    },
    (err, updatedProject) => { // callback, what happens after operation completes?
        if (err) { console.log(err); }
        else { res.redirect("/projects"); }
    }
  );
});

// Export this router module
module.exports = router;
