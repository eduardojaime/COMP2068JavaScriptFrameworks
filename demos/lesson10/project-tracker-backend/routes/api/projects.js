// Router object that handles CRUD functionality as HTTP endpoints (WebAPI)
// URL will look like this https://localhost:3000/api/projects
const express = require("express");
const router = express.Router();
// model provides access to db
const Project = require("../../models/project");

// configure HTTP handlers
// GET handler for /api/projects > return a list of projects in my db
router.get("/", (req, res, next) => {
  // const projects = [{ id: 1, name: 'Lab 3' }];
  // return res.status(200).json(projects);
  // code for mongoose v7.x
  Project.find().then(function (err, projects) {
    // status codes are important to tell the client what happened to their request
    if (err) {
      return res.status(500).json(err); // 500 means Server's fault, maybe my db timed out
    } else {
      return res.status(200).json(projects); // 200 means success
    }
  });
});

// export router object
module.exports = router;
