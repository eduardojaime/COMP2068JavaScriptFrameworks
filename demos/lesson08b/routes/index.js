var express = require('express');
var router = express.Router();
var User = require("../models/user");
var passport = require("passport");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET /login
router.get("/login", (req, res, next) => {
  let messages = req.session.messages || []; // if null messages then return empty list
  req.session.messages; // always clear messages
  res.render("login", { title: "Login", messages: messages }); // pass messages to the view
});
// POST /login
router.post("/login", passport.authenticate(
  "local", // strategy name
  {
    successRedirect: "/projects", // what happens when login is successful?
    failureRedirect: "/login",
    failureMessage: "Invalid Credentials"
  } // options object
));

// GET /register
router.get("/register", (req, res, next) => {
  res.render("register", { title: "Create a New Account" });
});

// POST /register
router.post("/register", (req, res, next) => {
  // Create a new user based on the information collected in the form (req.body)
  // call register() method from plm
  User.register(
    new User({ username: req.body.username }), // New User object to save in the db
    req.body.password, // Plain-text password to encrypt
    (err, newUser) => {
      // if successful then log user in and redirect to projects
      req.login(newUser, (err) => { res.redirect("/projects"); });
    } // Callback function
  );
});

// GET handler for logout
router.get('/logout', (req, res, next) => {
  req.logout(function (err) {
    res.redirect('/login');
  });
});

// GET handler for /github
// call passport authenticate and pass the name of the stragety 
// and the information we require from github
router.get('/github', passport.authenticate('github', { scope: ['user.email'] }));

// GET handler for /github/callback 
// this is the url they come back to after entering their credentials
router.get('/github/callback',
  // callback to send user back to login if unsuccessful
  passport.authenticate('github', { failureRedirect: '/login' }),
  // callback when login is successful
  (req, res, next) => { res.redirect('/projects') }
);

module.exports = router;
