var express = require('express');
var router = express.Router();
// use passport middleware to authenticate
var passport = require("passport");
// impor the user model to handle registration
var User = require("../models/user");

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET /login > loads the page
router.get("/login", function(req, res, next) {
  // handle failure messages
  let messages = req.session.messages || [];
  // reset session messages
  req.session.messages = [];
  // pass messages back to the view to show info box
  res.render("login", { title: "Enter your credentials", messages: messages });
});
// POST /login > user clicks on login button in the form
router.post("/login", passport.authenticate("local", {
  successRedirect: "/projects",
  failureRedirect: "/login",
  failureMessage: "Invalid credentials" // stored in req.session.messages
}));

// GET /register > loads the page
router.get("/register", function(req, res, next) {
  res.render("register", { title: "Create an account" });
});

// POST /register > user clicks on register button in the form
router.post("/register", function(req, res, next) {
  User.register(
    new User({ username: req.body.username}), 
    req.body.password, 
    (err, newUser) => {
      if (err) {
        console.log(err);
        return res.redirect("/register");
      }
      else {
        req.login(newUser, (err) => { res.redirect("/projects") });          
      }
    }
  )
});

module.exports = router;
