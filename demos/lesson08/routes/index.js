var express = require('express');
var router = express.Router();
var User = require("../models/user"); 
var passport = require("passport");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// All paths in this file are relative to the configured path in app.js
// GET /about
router.get("/about", (req, res, next) => {
  // any processing logic goes here
  // render a view, standard is to name it the same as the path
  res.render("about", { title: "About Us" });
});

// GET /login
router.get("/login", (req, res, next) => {
  // Handle validation messages from failed login attempts
  let messages = req.session.messages || [];
  req.session.messages = []; // clear messages after displaying
  res.render("login", { title: "Login", messages: messages });
});

// POST /login
router.post("/login", passport.authenticate("local",  {
  successRedirect: "/projects",
  failureRedirect: "/login",
  failureMessage: "Invalid Login"
}));

// GET /register
router.get("/register", (req, res, next) => {
  res.render("register", { title: "Register" });
});

// POST /register
router.post("/register", (req, res, next) => {
  // Create user based on form data and store in db
  // login user and redirect to /projects
  User.register(
    new User({ username: req.body.username }),
    req.body.password, 
    (error, user) => { 
      if (error) { console.log(error); res.redirect("/register"); }
      else {
        req.login(user, (error) => { res.redirect("/projects"); });
      }
    }
  );
});


module.exports = router;
