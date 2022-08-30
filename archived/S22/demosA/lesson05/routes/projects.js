// import express
const express = require('express');
// create router object
const router = express.Router();
// import mongoose model
const Project = require('../models/project');

// configure routes
// GET handler /Projects/
router.get('/', (req, res, next) => {
    //res.render('projects/index', { title: "Welcome to Project Tracker 2022! "});
    Project.find((err, projects)=>{
        if (err) { console.log(err); }
        else 
        {
            res.render('projects/index', 
            {
                title:'Welcome to Project Tracker 2022',
                dataset: projects
            });
        }
    });
});

// Adding a project
// GET handler /Projects/Add
router.get('/add', (req,res,next)=>{
    res.render('projects/add', { title: "Add a new Project"});
});

// POST handler /Projects/Add
router.post('/add', (req,res,next)=>{
    Project.create(
        {
            name: req.body.name, // extract values from form (body) by input id
            dueDate: req.body.dueDate,
            course: req.body.course
        },
        (err, newProject) => {
            if (err) { console.log(err); }
            else { res.redirect('/projects'); }
        }
    );
});


// export router object
module.exports = router;