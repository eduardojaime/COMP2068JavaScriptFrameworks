// Import express and create router object
const express = require("express");
const router = express.Router();
// import mongoose model in order to interact with the DB
const Project = require("../models/project"); // .. navigates a folder up
const Course = require("../models/course"); // to show course list

// Reusable function to check whether user is authenticated
function IsLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next(); // continue processing request
  }
  res.redirect("/login"); // not authenticated
}

// Configure router object with request handlers
// GET handler for /Projects/
router.get("/", (req, res, next) => {
  // TODO: Retrieve all projects from DB
  // res.render("projects/index", { title: "Project Tracker" });
  // find all projects and show
  // Project
  //   .find()
  //   .then((err, projects) => {
  //     res.render("projects/index", {
  //       title: "Project Tracker",
  //       dataset: projects,
  //     });
  //   })
  //   .catch(function (err) {
  //     console.log(err);
  //   });
  Project.find((err, projects) => {
    if (err) {
      console.log(err);
    } else {
      res.render("projects/index", {
        title: "Project Tracker",
        dataset: projects,
        user: req.user
      });
    }
  });
});

// GET handler for /Projects/Add > shows empty form for users to fill in
router.get("/add", IsLoggedIn, (req, res, next) => {
  // RETRIEVE ALL COURSES AND SEND TO VIEW
  Course.find((err, courses) => {
    if (err) {
      console.log(err);
    } else {
      res.render("projects/add", {
        title: "Add a New Project",
        courseList: courses,
        user: req.user
      });
    }
  });
});

// POST handler for /Projects/Add > triggered when users click the SAVE button in the form
router.post("/add", IsLoggedIn, (req, res, next) => {
  // Use the Project mongoose model to pass information from the form and create a new
  // document in the mongodb
  Project.create(
    {
      name: req.body.name,
      dueDate: req.body.dueDate,
      course: req.body.course,
    },
    (err, newProject) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/projects"); // success redirect to projects page
      }
    }
  );
});

// GET handler for /projects/delete/{id}
// example /projects/delete/6482781da707543bdb4c5d7f
router.get("/delete/:_id", IsLoggedIn, (req, res, next) => {
  // _id can be accessed from req.params after being defined in the path above
  Project.remove(
    {
      _id: req.params._id,
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/projects");
      }
    }
  );
});


// GET handler for Edit operations
router.get("/edit/:_id", IsLoggedIn, (req, res, next) => {
  // Find the Project by ID
  // Find available courses
  // Pass them to the view
  Project.findById(req.params._id, (err, project) => {
    if (err) {
      console.log(err);
    } else {
      Course.find((err, courses) => {
        if (err) {
          console.log(err);
        } else {
          res.render("projects/edit", {
            title: "Edit a Project",
            project: project,
            courses: courses,
            user: req.user
          });
        }
      }).sort({ name: 1 });
    }
  });
});

// POST handler for Edit operations
router.post("/edit/:_id", IsLoggedIn, (req, res, next) => {
  // find project based on ID
  // try updating with form values
  // redirect to /Projects
  Project.findOneAndUpdate(
    { _id: req.params._id },
    {
      name: req.body.name,
      dueDate: req.body.dueDate,
      course: req.body.course,
      status: req.body.status,
    },
    (err, updatedProject) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/projects");
      }
    }
  );
});

// Export router object
module.exports = router;
