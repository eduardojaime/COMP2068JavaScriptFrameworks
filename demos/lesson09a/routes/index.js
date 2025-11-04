var express = require("express");
var router = express.Router();
// Import passport and user model
var passport = require("passport");
// ../ navigates out of routes folder
var User = require("../models/user");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express", user: req.user });
});

// GET /login > render the form
router.get("/login", (req, res, next) => {
  let messages = req.session.messages || []; // if null then set to empty array
  req.session.messages = []; // clear messages after retrieving
  res.render("login", { 
    title: "Login to your Account", 
    messages: messages, 
    user: req.user  
  });
});

// POST /login > click on the button in the form
router.post("/login", passport.authenticate("local", 
  {
    successRedirect: "/projects", // on success
    failureRedirect: "/login",   // on failure
    failureMessage: "Invalid Login" // optional messages
  }
));

// GET /register
router.get("/register", (req, res, next) => {
  res.render("register", { title: "Create a New Account", user: req.user  });
});

// POST /register
router.post("/register", (req, res, next) => {
  User.register(
    new User({ username: req.body.username }),
    req.body.password,
    (error, newUser) => {
      if (error) {
        console.log(error);
        return res.redirect("/register");
      } else {
        req.login(newUser, (error) => {
          res.redirect("/projects");
        });
      }
    }
  );
});

// GET /logout
router.get("/logout", (req, res, next) => {
  req.logout((error) => {
    res.redirect("/login");
  });
});

// GET /github
router.get("/github", passport.authenticate("github", { scope: ["user:email"] }));

// GET /github/callback
router.get("/github/callback",
  passport.authenticate("github", 
    {
      successRedirect: "/projects",
      failureRedirect: "/login"
    })
  );

module.exports = router;
