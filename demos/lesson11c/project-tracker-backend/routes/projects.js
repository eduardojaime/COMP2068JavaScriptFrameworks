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

// DELETE /api/projects/:_id > Delete a project 

module.exports = router;