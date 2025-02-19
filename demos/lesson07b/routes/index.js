var express = require("express");
var router = express.Router();
var User = require("../models/user");
var passport = require("passport");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// GET /login
router.get("/login", function (req, res, next) {
  // handle messages from req.session object
  let messages = req.session.messages || []; // retrieve messages from session or set to empty array if null
  req.session.messages = []; // clear messages from session
  res.render("login", { title: "Login to your Account", messages: messages});
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
  res.render("register", { title: "Register for an Account" });
});

// POST /register
router.post("/register", function (req, res, next) {
  User.register(
    new User({ username: req.body.username }), // user data to insert in the DB
    req.body.password, // password to hash and store in the DB
    (err, newUser) => {
      // callback function to handle result (success or failure)
      if (err) {
        // error while registering
        console.log(err);
        return res.redirect("/register");
      } else {
        // successful registration
        req.login(newUser, (err) => {
          res.redirect("/projects");
        });
      }
    }
  );
});

module.exports = router;
