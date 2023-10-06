// controllers/routers are plural
// Import express and create router object
const express = require("express");
const router = express.Router();
// Import mongoose model to be used
const Project = require("../models/project");
// Configure GET/POST handlers
// Path relative to the one configured in app.js > /projects
router.get("/", (req, res, next) => {
    // retrieve data
    Project.find((err, projects)=>{
        if (err) console.log(err);
        else {
            // render view
            res.render("projects/index", { 
                title: "Project Tracker",
                dataset: projects
            })
        }
    });
});
// Export router object
module.exports = router;