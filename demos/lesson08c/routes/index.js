var express = require("express");
var router = express.Router();
var User = require("../models/user");
var passport = require("passport");

/* GET home page. */
// Paths here are relative to the path associated to the object in app.js
router.get("/", function (req, res, next) {
  res.render("index", { title: "Project Tracker" });
});
// GET handler for /about
router.get("/about", (req, res, next) => {
  res.render("about", { title: "About Us" });
});

// GET /login (user loads page)
router.get("/login", (req, res, next) => {
  let messages = req.session.messages || []; // if null set an empty list
  req.session.messages = []; // clear messages
  res.render("login", { title: "Login to the App", messages: messages });
});
// POST /login (user click Login button)
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/projects",
    failureRedirect: "/login",
    failureMessage: "Invalid Credentials",
  })
);

// GET /register (user loads page)
router.get("/register", (req, res, next) => {
  res.render("register", { title: "Create an Account" });
});
// POST /register (user clicks Register button)
router.post("/register", (req, res, next) => {
  // Model contains register method from PLM
  User.register(
    { username: req.body.username }, // user info to add to the DB
    req.body.password, // plain text password to encrypt
    (err, newUser) => {
      // callback function
      req.login(newUser, (err) => {
        res.redirect("/Projects");
      });
    }
  );
});

module.exports = router;
