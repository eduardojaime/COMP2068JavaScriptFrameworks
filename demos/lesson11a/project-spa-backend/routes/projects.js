// Router object, very similar to the ones we wrote before
// BUT we are not going to render views, instead we'll respond with JSON data
const express = require('express');
const router = express.Router();
const Project = require("../models/project");

// GET /projects/ > retrieve a list of all projects in the database
router.get("/", async (req, res, next) => {
    let projects = await Project.find().sort([["dueDate", "ascending"]]);
    return res.status(200).json(projects);
});

// POST /projects/ > create a new project
router.post("/", async (req, res, next) => {
    // expected request body format: 
    // {
    //     "name": "Project 1",
    //     "dueDate": "2024-07-15",
    //     "course": "COMP2068"
    // }
    // new project object must be contained in the request body
    let newProject = new Project({
        name: req.body.name,
        dueDate: req.body.dueDate,
        course: req.body.course        
    });
    await newProject.save();
    // return a RESTful response: Status code + JSON content
    return res.status(201).json(newProject); // 201 means record created successfully
});
// PUT /projects/:_id > update a project by its ID
router.put("/", async (req, res, next) => {
    // expected request body format: 
    // {
    //     "_id": "1234567890",
    //     "name": "Project 1",
    //     "dueDate": "2024-07-15",
    //     "course": "COMP2068"
    // }
    let projectId = req.body._id;
    let projectData = await Project.findByIdAndUpdate(
        { _id: projectId }, // id of project to update
        {
            name: req.body.name,
            dueDate: req.body.dueDate,
            course: req.body.course
        }, // info to update 
    );
    return res.status(200).json(projectData); // 200 means record updated successfully
});
// DELETE /projects/:_id > delete a project by its ID
router.delete("/:_id", async (req, res, next) => {
    let projectId = req.params._id;
    await Project.deleteOne({ _id: projectId });
    // 204 success no content https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204
    return res.status(204).json(); // 204 means record deleted successfully
});

// Export router object
module.exports = router;
