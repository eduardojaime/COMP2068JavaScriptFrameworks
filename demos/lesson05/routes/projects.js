// Import express and create a router object
const express = require("express");
const router = express.Router();
// configure router object

// This router will be configured to the path /projects in app.js

// GET handler for /projects/  << landing/root page of my section
router.get("/", (req, res, next) => {
  res.render("projects/index", { title: "Project Tracker 2022" });
});

// export the router object to make it available in app.js
module.exports = router;
