var express = require("express");
var router = express.Router();
var User = require("../models/user"); // use ../ to go up one directory level
var passport = require("passport");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// GET /login - page load
router.get("/login", function (req, res, next) {
  // handle session messages
  let messages = req.session.messages || []; // extract messages, or set to empty array if undefined
  req.session.messages = []; // clear messages
  res.render("login", { title: "Login to your Account", messages: messages });
});

// POST /login - user enters credentials and clicks submit
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/projects", // where to go if login is successful
    failureRedirect: "/login", // where to go if login fails
    failureMessage: "Invalid Credentials", // additional message for login failure
  })
);

// GET /register - page load
router.get("/register", function (req, res, next) {
  res.render("register", { title: "Register for an Account" });
});

// POST /register - user enters new user credentials and clicks submit
router.post("/register", function (req, res, next) {
  // Use the model to create a new user in the database
  // by calling the register() method (from plm) and passing:
  // user object, password, callback function
  User.register(
    new User({ username: req.body.username }), // user object
    req.body.password, // password separately to encrypt it
    (error, newUser) => {
      if (error) {
        console.log(error);
        return res.redirect("/register");
      }
      // if no error, authenticate the user
      req.login(newUser, (error) => {
        res.redirect("/projects");
      });
    }
  );
});

module.exports = router;
