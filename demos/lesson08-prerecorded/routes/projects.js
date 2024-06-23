// Router names are in plural form
// This section contains CRUD operations for projects
// CRUD operations are Create, Read, Update, Delete
// Import Express and create router object
const express = require("express");
const router = express.Router();
const Project = require("../models/project"); // ../ means go up one level to the root folder
const Course = require("../models/course");
const project = require("../models/project");
// Configure handlers for each route
// Note that paths are relative to path set in app.js > /projects
// GET /projects/ - List all projects
router.get("/", async (req, res, next) => {
  // Use mongoose data model to retrieve all projects
  let projects = await Project.find().sort([["dueDate", "ascending"]]);
  res.render("projects/index", { title: "All Projects", dataset: projects });
});
// GET /projects/add - Load form to add a new project
router.get("/add", async (req, res, next) => {
  let courseList = await Course.find().sort([["name", "ascending"]]);
  res.render("projects/add", {
    title: "Add a New Project",
    courses: courseList,
  });
});
// POST /projects/add - Save a new project
router.post("/add", async (req, res, next) => {
  // Use mongoose data model to create a new project object
  let newProject = new Project({
    name: req.body.name,
    dueDate: req.body.dueDate,
    course: req.body.course,
  });
  // Save the newly created project to the db (async operation)
  await newProject.save();
  // Redirect to the list of projects page
  res.redirect("/projects");
});
// GET /projects/edit/:_id - Load form to edit a project
router.get("/edit/:_id", async (req, res, next) => {
  let projectId = req.params._id;
  let projectData = await Project.findById(projectId);
  let courseList = await Course.find().sort([["name", "ascending"]]);
  res.render("projects/edit", {
    title: "Update Project Information",
    project: projectData,
    courses: courseList,
  });
});

// POST /projects/edit/:_id - Save an edited project
router.post("/edit/:_id", async (req, res, next) => {
  let projectId = req.params._id;
  await Project.findByIdAndUpdate(
    { _id: projectId }, // the id of the item to find
    {
      name: req.body.name,
      dueDate: req.body.dueDate,
      course: req.body.course,
      status: req.body.status,
    } // the object containing the fields to update
  );
  res.redirect("/projects");
});

// GET /projects/delete/:_id - Delete a project
// : indicates a route parameter named _id is expected
router.get("/delete/:_id", async (req, res, next) => {
  let projectId = req.params._id;
  // as per https://mongoosejs.com/docs/documents.html
  await Project.deleteOne({ _id: projectId });
  res.redirect("/projects");
});

// Export the router object
module.exports = router;
