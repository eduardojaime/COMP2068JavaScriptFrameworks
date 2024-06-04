// Router names are in plural form
// This section contains CRUD operations for projects
// CRUD operations are Create, Read, Update, Delete
// Import Express and create router object
const express = require('express');
const router = express.Router();
// Configure handlers for each route
// Note that paths are relative to path set in app.js > /projects
// GET /projects/ - List all projects 
router.get("/", (req, res ,next) => {
    res.render("projects/index", { title: "All Projects" });
});
// Export the router object
module.exports = router;