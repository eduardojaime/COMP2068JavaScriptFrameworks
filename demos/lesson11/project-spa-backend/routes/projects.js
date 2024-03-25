// Router object that handles requests to /api/projects
const express = require('express');
const router = express.Router();
// Import the Project model
const Project = require('../models/project');
// Configure router object to handle requests GET, POST, DELETE, PUT
// GET /api/projects/
router.get("/", async (req, res, next) => { 
    // Fetch all projects from MongoDB using mongoose v8 syntax
    let projects = await Project.find().sort({ dueDate: 1 });
    // Send the projects as a JSON response
    res.status(200).json(projects);
});
// TODO: POST
// TODO: PUT
// TODO: DELETE
// Export router object to make it available across your app
module.exports = router;