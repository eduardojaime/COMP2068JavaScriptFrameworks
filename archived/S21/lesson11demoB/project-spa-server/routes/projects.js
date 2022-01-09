// API ROUTER > returns JSON instead of HTML
const express = require('express');
const router = express.Router();

// Import the model into the router
const Project = require('../models/project');
const config = require('../config/globals');

// Middleware function that executes before anything else
router.use((req, res, next) => {
    // allow any request originating from http://localhost:4200 > no slash at the end
    res.header('Access-Control-Allow-Origin', config.clientUrl);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    // call next middleware function in the pipeline
    next();
});

// GET handler for /Projects/
router.get('/', (req, res, next) => {
    // const projects = [{ 'id':'100', 'name': 'Project B' }];
    // // http is stateless
    // return res.json(projects).status(200); // ??? OK Successfull
    Project.find((err, projects)=>{
        if (err) {
            return res.json(err).status(400); // bad request
        }
        else {
            return res.json(projects).status(200); //OK success
        }
    });
});

// POST handler for /Projects
router.post('/', (req, res, next) => {
    Project.create(req.body, (err, project) => {
        if (err) {
            return res.json(err).status(501);
        }
        else {
            return res.json(project).status(201); // resource created
        }
    });
});

// DELETE handler for /Projects/:_id
router.delete('/:_id', (req, res, next) => {
    Project.remove({ _id: req.params._id }, (err, project) => {
        if (err) {
            return res.json(err).status(400); // bad request
        }
        else {
            return res.json(project).status(204); // success without content
        }
    });
});

// PUT handler for /projects
router.put('/', (req, res, next) => {
    Project.findOneAndUpdate({ _id: req.body._id }, req.body, (err, project) => {
        if (err) {
            return res.json(err).status(400);
        }
        else {
            return res.json(project).status(202); // resource accepted        
        }
    });
});

module.exports = router;