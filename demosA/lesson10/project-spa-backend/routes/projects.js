const express = require('express');
const router = express.Router();

const Project = require('../models/project');

// Handle CORS requests by adding required headers to the response object
// this will handle any request to any endpoint in this router
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    next(); // make sure you always call next in these types of middleware functions
});

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