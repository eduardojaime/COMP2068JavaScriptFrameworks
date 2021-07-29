// Create router object
const express = require('express');
const router = express.Router();
// Import the model
const Project = require('../models/project');
const config = require('../config/globals');

// Add a middleware function that runs before anything else
router.use((req, res, next) => {
    // harcoded for now but configurable later
    res.header('Access-Control-Allow-Origin', config.clientURl);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

// GET handler for /projects
router.get('/', (req, res, next) => {
    // create mock list of projects
    // const projects = [{ id: 1, name: 'Project A'}];
    // return res.json(projects).status(200); // what's HTTP 200 > PROCESSED SUCCESSFULLY - OK
    Project.find((err, projects) => {
        if (err) {
            return res.json(err).status(400); // FAILURE > BAD REQUEST
        }
        else {
            return res.json(projects).status(200); // Success - OK
        }
    });

});

module.exports = router;