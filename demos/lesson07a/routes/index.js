var express = require("express");
var router = express.Router();
var User = require("../models/user");
var passport = require("passport");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// GET /login > load page
router.get("/login", (req, res, next) => {
  // retrieve messages from session object
  let messages = req.session.messages || []; // initialize as empty array if no messages
  // clear messages from session object
  req.session.messages = [];
  // pass messages to the view
  res.render("login", { title: "Login to Your Account", messages: messages });
});

// POST /login > user clicks on button
router.post("/login", passport.authenticate("local", {
  successRedirect: "/projects",
  failureRedirect: "/login",
  failureMessage: "Invalid Credentials",
}));

// GET /register
router.get("/register", (req, res, next) => {
  res.render("register", { title: "Create a New Account" });
});

// POST /register
router.post("/register", (req, res, next) => {
  // create a new user and redirect to /projects
  User.register(
    // register is a method from passport-local-mongoose
    new User({ username: req.body.username }), // new user object
    req.body.password, // password as string to be encrypted
    (err, newUser) => {
      // callback function to handle errors or redirection
      if (err) {
        console.log(err);
        return res.redirect("/register");
      }
      else {
        req.login(newUser, (err) => { // need to login after registration to initialize session
          res.redirect("/projects");
        });
      }
    }
  );
});

module.exports = router;
