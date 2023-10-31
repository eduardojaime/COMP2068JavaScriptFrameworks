var express = require("express");
var router = express.Router();
var User = require("../models/user");
var passport = require("passport");

/* GET home page. */
router.get("/", function (req, res, next) {
  // req.user contains information about the current session
  res.render("index", { title: "Express", user: req.user });
});

// Login and Register Functionality
// GET /login
router.get("/login", (req, res, next) => {
  let sessionMsgs = req.session.messages || []; // retrieve messages, if nothing then return empty list
  req.session.messages = []; // clear session messages
  res.render("login", {
    title: "Login",
    messages: sessionMsgs,
    user: req.user,
  });
});
// POST /login
router.post(
  "/login",
  passport.authenticate(
    "local", // authentication name
    {
      successRedirect: "/projects",
      failureRedirect: "/login",
      failureMessage: "Invalid Credentials",
    } // object with options
  )
);
// GET /register
router.get("/register", (req, res, next) => {
  res.render("register", {
    title: "Create a new User Account",
    user: req.user,
  });
});
// POST /register
router.post("/register", (req, res, next) => {
  // At this point user entered info including password, that needs to be saved to the DB
  User.register(
    new User({ username: req.body.username }), // User object to be saved in the DB
    req.body.password, // Plain-text password to be encrypted in the DB
    (err, newUser) => {
      // Callback function for when the operation is done
      if (err) {
        console.log(err);
        return res.redirect("/register");
      } else {
        req.login(newUser, (err) => {
          res.redirect("/projects");
        });
      }
    }
  );
});

// GET /logout
router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    res.redirect("/login");
  });
});

// GET /github
// triggers when user clicks on the "Login with Github" button on the login page
// user is sent to github.com in order to provide credentials
router.get(
  "/github",
  passport.authenticate("github", { scope: ["user.email"] })
);

// GET /github/callback
router.get(
  "/github/callback", // path
  passport.authenticate("github", { failureRedirect: "/login" }), // github middleware
  (req, res, next) => {
    res.redirect("/projects");
  } // custom middleware (success)
);

module.exports = router;
