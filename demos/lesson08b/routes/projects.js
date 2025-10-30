// Import express and create router object
const express = require("express");
const router = express.Router();
// Import the Project model
const Project = require("../models/project");
const Course = require("../models/course");
// Import the authentication middleware
const authenticationMiddleware = require("../extensions/authentication");
// Configure route handlers
// GET /projects/
// This route will remain unprotected (publicly accessible)
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
// Each handler can have multiple middleware functions
router.get("/add", authenticationMiddleware, async (req, res, next) => {
  let courseList = await Course.find().sort([["name", "ascending"]]);
  res.render("projects/add", {
    title: "Add a New Project",
    courses: courseList,
    user: req.user,
  });
});

// POST /projects/add
router.post("/add", authenticationMiddleware, async (req, res, next) => {
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
router.get("/delete/:_id", authenticationMiddleware, async (req, res, next) => {
  let projectId = req.params._id;
  await Project.findByIdAndDelete(projectId);
  res.redirect("/projects");
});

// GET /projects/edit/_id
router.get("/edit/:_id", authenticationMiddleware, async (req, res, next) => {
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
router.post("/edit/:_id", authenticationMiddleware, async (req, res, next) => {
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

// Export the router object for use in app.js
module.exports = router;
