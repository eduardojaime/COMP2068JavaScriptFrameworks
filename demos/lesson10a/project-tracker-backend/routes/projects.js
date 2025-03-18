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

// export the router object
module.exports = router;