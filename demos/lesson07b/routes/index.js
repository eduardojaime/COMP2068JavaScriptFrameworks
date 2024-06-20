var express = require('express');
var router = express.Router();
var User = require("../models/user");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Authentication functionality will be part of the index route (Home Page)

// GET /login > load the login form
// POST /login > when user clicks on the button
// GET /register > load the registration form
router.get("/register", (req, res, next) => {
  res.render("register", { title: "Sign Up for an Account" });
});
// POST /register > when user clicks on the button
router.post("/register", (req, res, next) => {
  // Create a new user, register() is provided by passport-local-mongoose
  User.register( 
    new User({ username: req.body.username }), // new user object
    req.body.password, // password as simple text to be encrypted
    (err, newUser) => {
      if (err) {
        console.log(err);
        res.redirect("/register");
      }
      else {
        // log user in and redirect to projects
        req.login(newUser, (err) => { res.redirect("/projects"); });
      }
    } // callback function
  );
});

module.exports = router;
