// Express router object for JSON responses
const express = require("express");
const router = express.Router();
// Require the project model
const Project = require("../model/project"); // ../ goes up one directory level

// GET /api/projects/ - Get all projects
router.get("/", async (req, res, next) => { 
    let projects = await Project.find(); // returns all projects in the DB collection
    res.status(200).json(projects); // return the projects as JSON with status code 200 (REST response)
});

// export the router
module.exports = router;