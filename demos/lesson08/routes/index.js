var express = require("express");
var router = express.Router();
const passport = require("passport");
const User = require("../models/user");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// GET handler for /login
router.get("/login", (req, res, next) => {
  // show messages
  let messages = req.session.messages || [];
  req.session.messages = [];
  res.render("login", { title: "Login", messages: messages });
});

// POST handler for /login
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/projects",
    failureRedirect: "/login",
    failureMessage: "Invalid Credentials",
  })
);

// GET handler for /register
router.get("/register", (req, res, next) => {
  res.render("register", { title: "Create a new account" });
});

// POST handler for /register
router.post("/register", (req, res, next) => {
  User.register(new User({
    username: req.body.username
  }), 
  req.body.password, 
  (err, newUser) => {
    if (err) {
      console.log(err);
      return res.redirect("/register");
    } else {
      req.login(newUser, (err) => {
        res.redirect("/Projects");
      });
    }
  });
});

// GET handler for /logout

module.exports = router;
