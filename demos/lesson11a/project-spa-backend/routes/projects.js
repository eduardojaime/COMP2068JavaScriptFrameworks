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

// TODO POST
// TODO PUT
// TODO DELETE

// Export router object
module.exports = router;
