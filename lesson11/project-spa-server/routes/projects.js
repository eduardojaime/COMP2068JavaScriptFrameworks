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
            return res.json(err).status(400); // bad request
        }
        else {
            return res.json(projects).status(200); // OK success
        }
    });
});

router.post('/', (req,res,next) => {
    Project.create(req.body, (err, project) => {
        if (err) {
            return res.json(err).status(501);
        }
        else {
            return res.json(project).status(201); //resource created
        }
    });
});

router.delete('/:_id', (req, res ,next) => {
    Project.remove({ _id: req.params._id }, (err, project) => {
        if (err) {
            return res.json(err).status(400); // bad request
        }
        else {
            return res.json(project).status(204); // success no content
        }
    });
});

router.put('/', (req, res, next) => {
    // find one based on id sent in the request body
    Project.findOneAndUpdate({ _id: req.body._id }, req.body, (err, project) => {
        console.log(req.body);
        if (err) {
            return res.json(err).status(400); // bad request
        }
        else {
            return res.json(project).status(202); // resource accepted
        }
    });
});

module.exports = router;