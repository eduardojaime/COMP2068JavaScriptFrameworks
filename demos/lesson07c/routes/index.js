var express = require('express');
var router = express.Router();
// Import user model and passport to handle registration and login
var User = require("../models/user"); // ../ to go up one directory level
var passport = require("passport");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET /login
router.get("/login", function(req, res, next) {
  let messages = req.session.messages || []; // extract messages from session or set to empty array if messages are null
  req.session.messages = []; // clear messages from session
  res.render("login", { title: "Login to your Account", messages: messages});
});

// POST /login
router.post("/login", passport.authenticate("local", {
  successRedirect: "/projects",
  failureRedirect: "/login",
  failureMessage: "Invalid Login" // stored in req.session.messages object
}));

// GET /register
router.get("/register", function(req, res, next) {
  res.render("register", { title: "Create a new Account" });
});

// POST /register
router.post("/register", function(req, res, next) {
  // Use the register method from plm plugin in the User model
  User.register(
    new User({ username: req.body.username }), // User object to create in the DB
    req.body.password, // password to hash and store in the DB
    function(err, user) { // callback function to handle the result
      if (err) {
        console.log(err);
        return res.redirect("/register");
      } else {
        req.login(user, (err) => { res.redirect("/projects"); });
      }
    }); 
});

module.exports = router;
