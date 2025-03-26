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

// POST /api/projects/ - Create a new project
router.post("/", async (req, res, next) => {
    // extract project info from request body and create a new instance of the Project model
    // e.g. { name: "Project 1", dueDate: "2021-12-31", course: "COMP2068"}
    let project = new Project(req.body);
    // save to the db
    await project.save();
    // return restful response (status code, and json data)
    return res.status(201).json(project);
});

// PUT /api/projects/ - Update all projects

// DELETE /api/projects/:_id - Delete all projects

// export the router
module.exports = router;