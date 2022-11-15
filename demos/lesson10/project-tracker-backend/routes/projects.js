const express = require('express');
const router = express.Router();

const Project = require('../models/projects');
const config = require('../config/globals');

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