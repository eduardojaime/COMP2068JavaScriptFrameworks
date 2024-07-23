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
// TODO PUT
// TODO DELETE

// Export router object
module.exports = router;
