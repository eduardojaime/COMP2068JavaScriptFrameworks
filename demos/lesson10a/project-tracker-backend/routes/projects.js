// Import express and create a router object
const express = require("express");
const router = express.Router();
// Import Model object to access the database
const Project = require("../models/project");
// Configure the router object
// GET /api/projects/ > Retrieve all projects in the collection
router.get("/", async (req, res, next) => {
    let projects = await Project.find();
    // return JSON response instead of rendering a view (HTML)
    res.status(200).json(projects);
});

// Export the router object
module.exports = router;
