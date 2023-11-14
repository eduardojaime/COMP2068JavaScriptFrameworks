// API Controller/Router to serve data in JSON format
const express = require("express");
const router = express.Router();
const Project = require("../models/project");
// Configure API routes to handle CRUD
// READ with GET /projects/
router.get("/", (req, res, next) => {
    Project.find((err, projects) => {
        if (err) return res.status(500).json(err);
        else return res.status(200).json(projects);
    });
});

module.exports = router;