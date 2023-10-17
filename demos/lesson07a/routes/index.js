var express = require('express');
var router = express.Router();
var User = require("../models/user");
var passport = require("passport");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Login and Register Functionality
// GET /login
router.get("/login", (req, res, next) => {
  let sessionMsgs = req.session.messages || []; // retrieve messages, if nothing then return empty list
  req.session.messages = []; // clear session messages
  res.render("login", { title: "Login", messages: sessionMsgs });
});
// POST /login
router.post("/login", passport.authenticate(
  "local", // authentication name
  { 
    successRedirect: "/projects",
    failureRedirect: "/login",
    failureMessage: "Invalid Credentials"
  } // object with options
));
// GET /register
router.get("/register", (req, res, next) => {
  res.render("register", {title: "Create a new User Account" });
});
// POST /register
router.post("/register", (req, res, next) => {
  // At this point user entered info including password, that needs to be saved to the DB
  User.register(
    new User({ username: req.body.username }), // User object to be saved in the DB
    req.body.password, // Plain-text password to be encrypted in the DB
    (err, newUser) => {  // Callback function for when the operation is done
      if (err) {
        console.log(err);
        return res.redirect("/register");
      }
      else {
        req.login(newUser, (err) => { res.redirect("/projects"); })
      }
    }
  )
});

module.exports = router;
