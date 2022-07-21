// import express and create router object
const express = require('express');
const router = express.Router();
const Project = require('../models/project');
// configure handlers
// GET handler for '/Projects/'
router.get('/', (req,res,next) => {
    // hardcode some data
    // const projects = [{id:1, name:'Project A'}];
    // send data back in json format
    // res.status(200).json(projects); // response is 200 OK with a list of projects

    // Use the model to retrieve data from MongoDB
    Project.find((err, projects) => {
        if (err) {
            return res.status(400).json(err);
        }
        else {
            return res.status(200).json(projects);
        }
    });
});

// export the router object
module.exports = router;