// Router objects are modules that can be associated to paths
// these contains middleware function associations
var express = require("express");
var router = express.Router();
var User = require("../models/user");
var passport = require('passport');

/* GET home page. */
// relative to app.use() > /
router.get("/", function (req, res, next) {
  // view name is relative to the /views folder
  res.render("index", { title: "Project Tracker App" });
});

// Option 1) Extend this router to handle another path
// GET handler for /about
// router.get('/about', (req, res, next) => {
//   res.render('about', {title: 'About Us'});
// });

// Login and Register functionality
// GET handler for /login
router.get("/login", (req, res, next) => {
  // read messages from session if any
  let messages = req.session.messages || [];
  // clear messages
  req.session.messages = [];
  // pass messages to the view
  res.render("login", { title: "Login to your Account", messages: messages });
});
// POST handler for /login
router.post("/login", passport.authenticate("local", {
  successRedirect:"/projects",
  failureRedirect: "/login",
  failureMessage: "Invalid Credentials" // don't be too specific with login error messages
}));

// GET handler for /register
router.get("/register", (req, res, next) => {
  res.render("register", { title: "Create a new Account" });
});

// POST handler for /register
router.post("/register", (req, res, next)=>{
  // creates a new user in the DB
  // takes three parameters: new user object, password, callback function
  User.register(
    new User({ username: req.body.username }),
    req.body.password, // it will be encrypted
    (err, newUser) =>{
      if (err) {
        console.log(err);
        return res.redirect("/register");
      }
      else {
        req.login(newUser, (err) => {
          res.redirect("/projects"); // login successful, initialize session for user and redirect to projects
        });
      }
    }
  );
});

module.exports = router;
