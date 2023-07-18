// similar to our other router objects in Express
// the difference is that we return JSON responses here
const express = require("express");
const router = express.Router();
const Project = require("../models/project");

// REST Endpoint > http://localhost:3000/projects
// CRUD functionality is mapped to HTTP Verbs
// GET handler for /projects/
// GET for Retrieve/Read data
router.get("/", (req, res, next) => {
  // const project = [{id:1, name: 'Lab 3'}];
  // return res.status(200).json(project); // returns status 200 OK and a list of projects in JSON format
  Project.find((err, projects) => {
    if (err) {
        return res.status(500).json(err); // 500 means server error, returns the error message
    } else {
        return res.status(200).json(projects); // returns list as JSON
    }
  });
});

// TODO: POST for Create/Insert new data
// TODO: PUT for Update/Edit existing data
// TODO: DELETE for Delete/Remove data

module.exports = router;
