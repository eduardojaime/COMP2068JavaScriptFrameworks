var express = require("express");
var router = express.Router();
// Import passport and user
var passport = require("passport");
var User = require("../models/user");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express", user: req.user });
});

// GET /login
router.get("/login", function (req, res, next) {
  // Get any messages that may have been set in the session object
  // for example those that come from a failureMessage option in the passport.authenticate method
  let messages = req.session.messages || [];
  req.session.messages = [];
  res.render("login", {
    title: "Login to Project Tracker",
    messages: messages,
  });
});

// POST /login
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/projects",
    failureRedirect: "/login",
    failureMessage: "Invalid Credentials",
  })
);

// GET /register
router.get("/register", function (req, res, next) {
  res.render("register", { title: "Register for Project Tracker" });
});

// POST /register
router.post("/register", function (req, res, next) {
  User.register(
    new User({ username: req.body.username }), // Create a new user object
    req.body.password, // Pass password separately to handle encryption
    function (err, newUser) {
      // Callback function to handle the result
      if (err) {
        // If there is an error, render the error page
        console.log(err);
        res.render("error", {
          message: "Your registration information is not valid",
        });
      } else {
        // Authenticate the user and redirect to the projects list
        req.login(newUser, function (err) {
          res.redirect("/projects");
        });
      }
    }
  );
});

// GET /logout
router.get("/logout", (req, res, next) => {
  req.logout((err) => { res.redirect("/login") });
});

// GET /github
// When user clicks on "Login With Github" on the login page
// they'll be sent to github.com to enter their credentials
router.get("/github", passport.authenticate("github", { scope: ["user:email"]}));

// GET /github/callback
// When user successfully logs in with Github, they'll be redirected to this route
// they'll be redirected to the projects page
router.get(
  "/github/callback", 
  passport.authenticate("github", { failureRedirect: "/login" }), // github middleware
  (req, res, next) => { // custom middleware to handle successful authentication
    res.redirect("/projects");
  }
);

module.exports = router;
