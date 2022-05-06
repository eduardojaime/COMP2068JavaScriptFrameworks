// API ROUTER > returns JSON instead of HTML
const express = require('express');
const router = express.Router();

// Import the model
const Project = require('../models/project');
const config = require('../config/globals');

// handle CORS
// Middleware function that executes before all others
router.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', config.clientUrl);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    // call next middleware function in the pipeline
    next();
})

// GET handler for /api/Projects/
router.get('/', (req, res, next) => {
    // const projects = [{'id':'100','name': 'Project A'}];
    // always set status first and then set json content
    // different errors: 300 (redirect/success), 400 (client), 500 (server)
    // return res.status(200).json(projects);

    // return data from the DB
    Project.find((err, projects)=> {
        if (err) {
            res.status(500).json(err);
        }
        else {
            res.status(200).json(projects);
        }
    });
});

// export router
module.exports = router;