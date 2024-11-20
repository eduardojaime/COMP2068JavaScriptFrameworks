const express = require("express");
const router = express.Router();
const Project = require("../models/project");

// GET /api/projects > retrieves all projects in the database
router.get("/", async (req, res, next) => {
  let projects = await Project.find();
  // HTTP Response with status code 200 OK containing the projects in JSON format
  res.status(200).json(projects);
});

// POST /api/projects > creates a new project in the database
router.post("/", async (req, res, next) => {
  // expected {name: 'LAB04', dueDate: '2024-11-27', course: 'ASP.NET'}
  let project = new Project(req.body);
  await project.save();
  res.status(201).json(project); // 201 means 'created' as per https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
});

// PUT /api/projects > updates a project in the database
router.put("/", async (req, res, next) => {
  let project = await Project.findByIdAndUpdate(
    { _id: req.body._id },
    req.body
  );
  res.status(200).json(project);
});

// DELETE /api/projects > deletes a project in the database
router.delete("/:_id", async (req, res, next) => {
  let project = await Project.findByIdAndDelete(req.params._id);
  res.status(200).json(project);
});

module.exports = router;
