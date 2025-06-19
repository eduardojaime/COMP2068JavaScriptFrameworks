var express = require("express");
var router = express.Router();
var User = require("../models/user"); // ../ to move up one directory
var passport = require("passport");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// GET /login
router.get("/login", function (req, res, next) {
  res.render("login", { title: "Login" });
});

// POST /login
router.post("/login", passport.authenticate(
    "local", // strategy name
    {
      // options
      successRedirect: "/projects", // redirect to projects on success
      failureRedirect: "/login", // redirect to login on failure
      failureMessage: "Invalid Credentials", // message on failure stored in session object
    }
  )
);

// GET /register
router.get("/register", function (req, res, next) {
  res.render("register", { title: "Register" });
});

// POST /register
router.post("/register", function (req, res, next) {
  // Create a new user based on input from the form
  // Call the User model and pass three parameters: user data, password, and callback
  User.register(
    new User({ username: req.body.username }), // new user data
    req.body.password, // password from the form
    function (error, newUser) {
      if (error) {
        console.log(error);
        return res.redirect("/register");
      } else {
        // log user in and redirect to projects
        req.login(newUser, (err) => {
          res.redirect("/projects");
        });
      }
    }
  );
});

module.exports = router;
