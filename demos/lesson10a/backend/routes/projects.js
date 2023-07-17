const express = require("express");
const router = express.Router();
const Project = require("../models/project");

// GET handler for /Projects/
// This endpoint responds to a REST Request so it must provide status code
// GET for READING/RETRIEVING data
router.get("/", (req, res, next) => {
  // res.status(200).json({ name: "Lab 2", course: "JS Frameworks" });
  Project.find((err, projects) => {
    if (err) {
      return res.status(500).json(err); // 500 means server error
    } else {
      return res.status(200).json(projects);
    }
  });
});

// TODO: POST handler for /Projects/
// POST for CREATING/INSERTING new data

// TODO: PUT handler for /Projects/
// PUT for UPDATING/EDITING existing data

// TODO: DELETE handler for /Projects/
// DELETE for DELETING/REMOVING data

module.exports = router;
