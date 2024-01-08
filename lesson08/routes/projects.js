// Naming convention > controllers/routers are plural
// Import express and create router object
const express = require("express");
const router = express.Router();
// Import mongoose model to be used
const Project = require("../models/project");
const Course = require("../models/course");
// Moved middleware function to extensions/authentication.js to make it reusable across different routers
const AuthenticationMiddleware = require("../extensions/authentication");
// Custom Middleware function to check for an authenticated user
// function AuthenticationMiddleware(req, res, next) {
//     if (req.isAuthenticated()) { // returns true if the session was started
//         return next(); // calls the next middleware in the stack
//     }
//     else {
//         // user not authenticated
//         res.redirect("/login");
//     }
// }
// Configure GET/POST handlers
// Path relative to the one configured in app.js > /projects
// GET /projects/
router.get("/", async (req, res, next) => {
  // retrieve ALL data, and sort by dueDate
  let projects = await Project.find().sort([["dueDate", "descending"]]);
  // render view
  res.render("projects/index", {
    title: "Project Tracker",
    dataset: projects,
    user: req.user,
  });
});
// GET /projects/add
router.get("/add", AuthenticationMiddleware, async (req, res, next) => {
  let courseList = await Course.find().sort([["name", "ascending"]]);
  res.render("projects/add", {
    title: "Add a New Project",
    courses: courseList,
    user: req.user,
  });
});

// POST /projects/add
router.post("/add", AuthenticationMiddleware, async (req, res, next) => {
  // use the project module to save data to DB
  // use the new Project() method of the model
  // and map the fields with data from the request
  // newProject object is returned if operation was successful
  // save changes and redirect
  let newProject = new Project({
    name: req.body.name,
    dueDate: req.body.dueDate,
    course: req.body.course,
  });
  await newProject.save();
  res.redirect("/projects");
});

// GET /projects/delete/_id
// access parameters via req.params object
router.get("/delete/:_id", AuthenticationMiddleware, async (req, res, next) => {
  let projectId = req.params._id;
  await Project.findByIdAndRemove({ _id: projectId });
  res.redirect("/projects");
});

// GET /projects/edit/_id
router.get("/edit/:_id", AuthenticationMiddleware, async (req, res, next) => {
  let projectId = req.params._id;
  let projectData = await Project.findById(projectId);
  let courseList = await Course.find().sort([["name", "ascending"]]);
  res.render("projects/edit", {
    title: "Edit Project Info",
    project: projectData,
    courses: courseList,
    user: req.user,
  });
});

// POST /projects/edit/_id
router.post("/edit/:_id", AuthenticationMiddleware, async (req, res, next) => {
  let projectId = req.params._id;
  await Project.findByIdAndUpdate(
    { _id: projectId }, // filter to find the project to update
    {
      // updated data
      name: req.body.name,
      dueDate: req.body.dueDate,
      course: req.body.course,
      status: req.body.status,
    }
  );
  res.redirect("/projects");
});

// Export router object
module.exports = router;
