// API Router Object
// It's very similar to a regular MVC Router object
// The difference is the return value (JSON object)
const express = require('express');
const router = express.Router();
// Import the Project model
// ../ means go up one level in the directory structure
const Project = require('../models/project');

// Implement the CRUD operations
// GET /api/projects/ > Get all projects
router.get("/", async (req, res, next) => {
    let projects = await Project.find();
    // Respond with a JSON formatted list of Projects
    res.status(200).json(projects);
});

// POST /api/projects/ > Create a new project
router.post("/", async (req, res, next) => {
    // Expecting to receive a JSON object that represents a project in the request body
    // E.g. { "name": "Project 1", "dueDate": "2025-03-30", "course": "COMP2068" }
    let projectData = req.body;
    // Create a new Project object
    let newProject = new Project(projectData);
    // Save the new Project object to the database
    await newProject.save();
    // Respond with a JSON formatted response
    return res.status(201).json(newProject);
});

// PUT /api/projects/ > Update a project
router.put("/", async (req, res, next) => {    
    // Expecting to receive a JSON object that represents a project in the request body
    // E.g. { "_id": "ABCDEF12345", "name": "Project 1", "dueDate": "2025-03-30", "course": "COMP2068" }
    let projectData = req.body;
    // Find by id and update the project
    await Project.findByIdAndUpdate(projectData._id, projectData);
    // Respond with a JSON formatted response
    return res.status(200).json(projectData);
});

// DELETE /api/projects/:_id > Delete a project
router.delete("/:_id", async (req, res, next) => {
    // retrieve id from url parameters
    let projectId = req.params._id;
    // Find by id and delete the project
    await Project.findByIdAndDelete(projectId);
    // Respond with a JSON formatted response
    return res.status(204).json(null);
});


module.exports = router;