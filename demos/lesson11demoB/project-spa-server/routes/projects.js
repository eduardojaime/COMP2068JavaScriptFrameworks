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

module.exports = router;