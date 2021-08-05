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

// POST handler for /projects
router.post('/', (req, res, next) => {
    Project.create(req.body, (err, project) => {
        if (err) {
            return res.json(err).status(501); 
        }
        else {
            return res.json(project).status(201);
        }
    });
});

// DELETE handler for /projects/:_id
// :_id indicates id is expected as a parameter
router.delete('/:_id', (req, res, next) => {
    // remove by ID
    Project.remove({ _id: req.params._id }, (err, project) => {
        if (err) {
            return res.json(err).status(400); // bad request
        }
        else {
            return res.json(project).status(204); // success without content
        }
    });
});

module.exports = router;