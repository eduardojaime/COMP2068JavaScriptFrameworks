// import express
const express = require('express');
// create router object
const router = express.Router();
// import mongoose model
const Project = require('../models/project');
const Course = require('../models/course');

// configure routes
// GET handler /Projects/
router.get('/', (req, res, next) => {
    //res.render('projects/index', { title: "Welcome to Project Tracker 2022! "});
    Project.find((err, projects) => {
        if (err) { console.log(err); }
        else {
            res.render('projects/index',
                {
                    title: 'Welcome to Project Tracker 2022',
                    dataset: projects
                });
        }
    });
});

// Adding a project
// GET handler /Projects/Add
router.get('/add', (req, res, next) => {
    // res.render('projects/add', { title: "Add a new Project"});
    Course.find((err, courses) => {
        if (err) { console.log(err); }
        else {
            res.render('projects/add', { title: "Add a new Project", courses: courses });
        }
    }).sort({ name: 1 });
});

// POST handler /Projects/Add
router.post('/add', (req, res, next) => {
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

// GET handler for /Projects/Delete/_id
router.get('/delete/:_id', (req, res, next) =>{
    Project.remove({
        _id: req.params._id
    }, 
    (err) => {
        if (err) {console.log(err);}
        else {
            res.redirect('/projects');
        }
    })
});

// GET handler for /Projects/Edit/_id
router.get('/edit/:_id', (req, res, next) =>{
    Project.findById(req.params._id, (err, project)=>{
        if (err) { console.log(err);}
        else {
            // res.render('projects/edit', {title:'Edit a Project', project: project});
            Course.find((err, courses) => {
                if(err) { console.log(err);}
                else {
                    res.render('projects/edit', 
                    {
                        title:'Edit a Project', 
                        project: project, 
                        courses: courses
                    });
                }
            }).sort({name: 1});
        }
    });
});

// POST handler for /Projects/Edit/:_id
router.post('/edit/:_id', (req, res, next) => {
    Project.findOneAndUpdate(
        {
            _id: req.params._id
        },
        {
            name: req.body.name,
            dueDate: req.body.dueDate,
            course: req.body.course,
            status: req.body.status
        },
        (err, updatedProject) => {
            if (err) { console.log(err);}
            else {
                res.redirect('/projects');
            }
        }
    );
});

// export router object
module.exports = router;