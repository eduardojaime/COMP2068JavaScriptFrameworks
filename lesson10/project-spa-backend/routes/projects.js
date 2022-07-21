const express = require('express');
const router = express.Router();

const Project = require('../models/project');
const config = require('../config/globals')

// Allow cross-origin requests
// Middleware executes before any other method in my router
router.use((req,res,next) => {
    // hardcoded for now but must be made configurable
    console.log('Request from ' + req)
    res.header('Access-Control-Allow-Origin', config.clientServer); // 'http://localhost:4200');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    next();
});

// GET handler for /projects
router.get('/', (req, res, next)=>{
    // const projects = [{ id: 1, name: 'Project A'}];
    // return res.json(projects).status(200);
    Project.find((err, projects) => {
        if (err) {
            return res.status(400).json(err); // bad request
        }
        else {
            return res.status(200).json(projects); // OK success
        }
    });
});

module.exports = router;