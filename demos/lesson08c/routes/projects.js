// controllers/routers are plural
// Import express and create router object
const express = require("express");
const router = express.Router();
// Import mongoose model to be used
const Project = require("../models/project");
const Course = require("../models/course");

// add reusable middleware function to inject it in our handlers below that need authorization
function IsLoggedIn(req,res,next) {
  if (req.isAuthenticated()) {
      return next();
  }
  res.redirect('/login');
}

// Configure GET/POST handlers
// Path relative to the one configured in app.js > /projects
// R > Retrieve/Read usually shows a list (filtered/unfiltered)
router.get("/", (req, res, next) => {
  // retrieve data
  Project.find((err, projects) => {
    if (err) console.log(err);
    else {
      // render view
      res.render("projects/index", {
        title: "Project Tracker",
        dataset: projects,
      });
    }
  });
});
// C > Create new project in DB
// GET handler for /projects/add (loads form)
router.get("/add", IsLoggedIn, (req, res, next) => {
  // res.render("projects/add", { title: "Add a new Project" });
  Course.find((err, courseList) => {
    res.render("projects/add", {
      title: "Add a new Project",
      courses: courseList,
    });
  });
});
// POST handler for /projects/add (receives input data)
router.post("/add", IsLoggedIn, (req, res, next) => {
  Project.create(
    {
      name: req.body.name,
      dueDate: req.body.dueDate,
      course: req.body.course,
    }, // new project to add
    (err, newProject) => {
      res.redirect("/projects");
    } // callback function, what happens when the CREATE operation is complete?
  );
});

// U > Update a given project in DB by ID
// GET /projects/edit/ID
router.get("/edit/:_id", IsLoggedIn, (req, res, next) => {
  Project.findById(req.params._id, (err, projectObj) => {
    Course.find((err, courseList) => {
      res.render("projects/edit", 
      {
        title: "Edit a Project",
        project: projectObj,
        courses: courseList
      });
    });
  });
});
// POST /projects/edit/ID
router.post("/edit/:_id", IsLoggedIn, (req, res, next) => {
  Project.findOneAndUpdate(
    { _id: req.params._id }, // filter to find the project
    {
      name: req.body.name,
      dueDate: req.body.dueDate,
      course: req.body.course,
      status: req.body.status
    }, // updated project info
    (err, updatedProject) => { res.redirect("/projects"); } // callback function
  );
});

// D > Delete a project in the DB by ID
// GET /projects/delete/6525f5c28c49905d3e5450e1
router.get("/delete/:_id", IsLoggedIn, (req, res, next) => {
  let projectId = req.params._id;
  Project.remove(
    { _id: projectId }, // filter to identify project
    (err) => {
      res.redirect("/projects");
    } // callback function
  );
});
// Export router object
module.exports = router;
