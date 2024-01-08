const express = require("express");
const router = express.Router();

const Project = require("../models/project");
const config = require("../config/globals");

// Allow cross-origin requests (can also be set from cors package)
// Middleware executes before any other method in my router
// router.use((req, res, next) => {
//   // hardcoded for now but must be made configurable
//   console.log("Request from " + req);
//   res.header("Access-Control-Allow-Origin", config.clientServer); // 'http://localhost:4200');
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
//   next();
// });

// GET handler for /projects
router.get("/", (req, res, next) => {
  // const projects = [{ id: 1, name: 'Project A'}];
  // return res.status(200).json(projects);
  Project.find((err, projects) => {
    if (err) {
      return res.status(400).json(err); // bad request
    } else {
      return res.status(200).json(projects); // OK success
    }
  });
  // code for mongoose v7.x
  //   Project.find().then(function (projects, err) {
  //     // status codes are important to tell the client what happened to their request
  //     if (err) {
  //       return res.status(500).json(err); // 500 means Server's fault, maybe my db timed out
  //     } else {
  //       return res.status(200).json(projects); // 200 means success
  //     }
  //   });
});

module.exports = router;
