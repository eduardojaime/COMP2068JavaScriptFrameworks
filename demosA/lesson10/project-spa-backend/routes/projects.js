const express = require('express');
const router = express.Router();

const Project = require('../models/project');

// configure get/post/delete/put handlers

// API Design: CRUD operations are equivalent to HTTP Methods
// GET handler for '/Projects/'
router.get('/', (req, res, next) => {
    // retrieve some data
    // const projects = [{ id: 1, name: 'Project 2B'}]; // just for testing
    // send back JSON response with status code
    //res.status(200).json(projects);

    // retrieve data from the DB
    Project.find((err, projects) => {
        if (err) { 
            return res.status(400).json(err); // bad request
        }
        else {
            return res.status(200).json(projects); // OK success
        }
    });
});

// make it available to the app
module.exports = router;