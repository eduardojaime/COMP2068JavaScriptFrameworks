// Router object for API endpoints
// Instead of returning HTML code we will return JSON data
const express = require("express");
const router = express.Router();
const Project = require("../models/project");

// GET /projects > READ all projects
router.get("/", async (req, res, next) => {
    let projects = await Project.find().sort({ dueDate: 1 });
    // Returns list of projects in JSON format with status code 200 (success)
    return res.status(200).json(projects);
});
// TODO: POST /projects > CREATE a new project
// TODO: PUT /projects > UPDATE a project
// TODO: DELETE /projects > DELETE a project

module.exports = router;