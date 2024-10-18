var express = require("express");
var router = express.Router();
var User = require("../models/user");
var passport = require("passport");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// GET /login > loads the form
router.get("/login", (req, res, next) => {
  // handle session messages
  let messages = req.session.messages || []; // extracts messages or initializes an empty array
  req.session.messages = []; // resets messages
  res.render("login", { title: "Login with your Credentials", messages: messages });
});

// POST /login > processes the form and log user in
router.post("/login", passport.authenticate(
  "local", 
  {
    successRedirect: "/projects",
    failureRedirect: "/login",
    failureMessage: "Invalid Credentials",
  }
));

// GET /register > loads the form
router.get("/register", (req, res, next) => {
  res.render("register", { title: "Create an Account" });
});
// POST /register > processes the form and create user
router.post("/register", (req, res, next) => {
  // Create a new user, log them in, and redirect to /projects
  // Use out-of-the-box PLM method register that takes three parameters: user data, password, and callback
  User.register(
    new User({ username: req.body.username }),
    req.body.password,
    (err, user) => {
      if (err) {
        console.log("Error registering!", err);
        return res.redirect("/register");
      } else {
        req.login(user, (err) => {
          res.redirect("/projects");
        });
      }
    }
  );
});

module.exports = router;
