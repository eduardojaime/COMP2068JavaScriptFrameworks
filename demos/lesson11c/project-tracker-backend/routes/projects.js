// API Router Object
// It's very similar to a regular MVC Router object
// The difference is the return value (JSON object)
const express = require('express');
const router = express.Router();
// Import the Project model
// ../ means go up one level in the directory structure
const Project = require('../models/project');

// TODO - Implement the CRUD operations
// GET /api/projects/ > Get all projects
router.get("/", async (req, res, next) => {
    let projects = await Project.find();
    // Respond with a JSON formatted list of Projects
    res.status(200).json(projects);
});

module.exports = router;