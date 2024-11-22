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
  // expecting {name: 'LAB03', dueDate: '2024-12-01', course: 'ASP.NET'}
  let newProject = new Project(req.body);
  await newProject.save();
  // HTTP Response with status code 201 Created containing the new project in JSON format
  res.status(201).json(newProject);
});
// PUT /api/projects > updates a project in the database
router.put("/", async (req, res, next) => {
  let updatedProject = await Project.findByIdAndUpdate(
    req.body._id, // _id of the project to update
    req.body // data {_id: 'abc123', name: 'LAB03', dueDate: '2024-12-01', course: 'ASP.NET'}
  );
  // HTTP Response with status code 200 OK containing the updated project in JSON format
  res.status(200).json(updatedProject);
});

// DELETE /api/projects/:id > deletes a project from the database
router.delete("/:id", async (req, res, next) => {
  let deletedProject = await Project.findByIdAndDelete(req.params.id);
  // HTTP Response with status code 200 OK containing the deleted project in JSON format
  res.status(200).json(deletedProject);
});

module.exports = router;
