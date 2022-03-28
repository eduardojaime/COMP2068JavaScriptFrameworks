const express = require('express');
const router = express.Router();

const PROJECT = require('../models/project');

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
