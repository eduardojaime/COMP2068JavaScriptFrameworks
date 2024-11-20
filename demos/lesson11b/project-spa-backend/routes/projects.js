const express = require("express");
const router = express.Router();
const Project = require("../models/project");

// TODO configure HTTP handlers for CRUD functionality
// GET /api/projects > retrieves all projects in the database
router.get("/", async (req, res, next) => {
    let projects = await Project.find();
    // HTTP Response with status code 200 OK containing the projects in JSON format
    res.status(200).json(projects);
});

module.exports = router;