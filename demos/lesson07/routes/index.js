var express = require("express");
var router = express.Router();
// import passport and user model
var passport = require("passport");
var User = require("../models/user");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// GET /login
router.get("/login", function (req, res, next) {
  // Retrieve messages from session object, set to empty list if null
  let messages = req.session.messages || [];
  // clear messages
  req.session.messages = [];
  // pass messages to the view
  res.render("login", { title: "Login", messages: messages });
});

// POST /login
router.post("/login", passport.authenticate(
  "local", // strategy name
  {
    successRedirect: "/projects",
    failureRedirect: "/login",
    failureMessage: "Invalid Credentials"
  }
));

// GET /register
router.get("/register", function (req, res, next) {
  res.render("register", { title: "Register" });
});

// POST /register
router.post("/register", function (req, res, next) {
  // Three parameters: user info to create in the DB, password in plain text, callback function
  User.register(
    new User({ username: req.body.username }),
    req.body.password,
    (error, newUser) => {
      if (error) {
        console.log(error);
        res.redirect("/register");
      } else {
        // log user in, and redirect to /projects
        req.login(newUser, (error) => {
          return res.redirect("/projects");
        });
      }
    }
  );
});

module.exports = router;
