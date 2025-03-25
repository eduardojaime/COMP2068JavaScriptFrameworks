// API Router object (similar to an MVC Router object, but returns JSON instead of HTML)
const express = require("express");
const router = express.Router();
// import the project model
const Project = require("../models/project"); // ../ means go up one level

// GET /api/projects/ - get all projects (define /api/projects route in app.js)
router.get("/", async (req, res, next) => {
    // retrieve data from MongoDB
    let projects = await Project.find();
    // return data as JSON and success status code 200
    res.status(200).json(projects);
});

// POST /api/projects/ - create a new project
router.post("/", async (req, res, next) => {
    // expecting to receive JSON data in the request body with the project details
    // E.g. {name: 'LAB04', dueDate: '2024-11-27', course: 'ASP.NET'}
    let project = new Project(req.body); // create a new instance of the Project model with the info received
    // save the project to the database
    await project.save();
    // return success status code 201 Created
    res.status(201).json(project);
});

// DELETE /api/projects/:_id - delete a project by id
router.delete("/:_id", async (req, res, next) => {
    let projectId = req.params._id;
    await Project.findByIdAndDelete(projectId);
    res.status(204).json(null); // 204 means no content
});

// PUT /api/projects/ - update a project by id (included in the request body)
router.put("/", async (req, res, next) => {
    // retrieve JSON from req.body, this will contain the updated project details
    let project = req.body;
    // update the project in the database
    let updatedProject = await Project.findByIdAndUpdate(
        project._id, // id of the project to update
        project, // the new project details
    );
    // return the updated project as JSON
    res.status(200).json(updatedProject);
});

// export the router object
module.exports = router;