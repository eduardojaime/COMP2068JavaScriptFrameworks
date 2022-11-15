const express = require('express');
const router = express.Router();

const Project = require('../models/projects');
const config = require('../config/globals');

// configure cors policy
// use a middelware that applies to all requests
router.use((req,res,next) => {
    // hardcoded for now but must be made configurable
    console.log('Request from ' + req)
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    next();
});

// GET handler for /projects
router.get('/', (req,res,nex) => {
    Project.find((err, projects)=>{
        if (err) {
            return res.status(500).json(err);
        }
        else {
            return res.status(200).json(projects);
        }
    })
});

module.exports = router;