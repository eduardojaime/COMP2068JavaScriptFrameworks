const express = require('express');
const router = express.Router();

const PROJECT = require('../models/project');
const config = require('../config/globals');

// add middleware to handle CORS request coming from frontend
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', config.clientUrl);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    // very important, call next to continue execution of middleware pipeline
    next();
});


// GET handler for '/api/projects'
// Return a list of all projects in my DB
router.get('/', (req, res, next) => {
    PROJECT.find((err, projects) => {
        if (err) {
            // return error response
            res.status(500).json(err);
        }
        else {
            // return success response with a list of projects
            res.status(200).json(projects);
        }
    });
});

// export router
module.exports = router;
