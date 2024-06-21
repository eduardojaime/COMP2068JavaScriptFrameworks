var express = require("express");
var router = express.Router();
var User = require("../models/user");
var passport = require("passport");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// Authentication Handlers
// Login
router.get("/login", (req, res, next) => {
  let messages = req.session.messages || []; // get or initialize messages
  req.session.messages = []; // clear messages to prevent them from showing up again
  res.render("login", { title: "Login to your Account", messages: messages});
});
router.post("/login",
  passport.authenticate("local", {
    successRedirect: "/projects",
    failureRedirect: "/login",
    failureMessage: "Invalid Login"  
}));
// Register
router.get("/register", (req, res, next) => {
  let error = null;
  if (req.query.error) {
    error = req.query.error;
  }
  res.render("register", { title: "Create a New Account", messages: error });
});
router.post("/register", (req, res, next) => {
  User.register(
    new User({ username: req.body.username }), // new User object
    req.body.password, // password to encrypt
    (err, newUser) => {
      if (err) {
        console.log(err);
        return res.redirect("/register?error=Username%20already%20taken");
      }
      else {
        // log new user in and redirect them
        req.login(newUser, (err) => {
          res.redirect("/projects");
        });
      }
    }// callback
  );
});


module.exports = router;
