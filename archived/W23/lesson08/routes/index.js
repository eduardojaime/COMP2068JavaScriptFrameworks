var express = require("express");
var router = express.Router();
// import User
const User = require('../models/user');
const passport = require('passport');

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// GET /login
router.get("/login", (req, res, next) => {
  let messages = req.session.messages || []; // retrieves messages attribute or creates empty list
  req.session.messages = []; // clear messages
  // pass to view
  res.render("login", { title: "Login", messages: messages });
});

// POST /login
router.post('/login', passport.authenticate('local', {
  successRedirect: '/projects',
  failureRedirect: '/login',
  failureMessage: 'Invalid Credentials'
}));

// GET /register
router.get("/register", (req, res, next) => {
  res.render("register", { title: "Create a new account" });
});

// POST /register
router.post('/register', (req, res, next)=>{
  // create a new user based on the info collected on the page
  // three parameters: new user object, password, callback function
  User.register(
    new User({
      username: req.body.username
    }),
    req.body.password,
    (err, newUser) => {
      if (err) {
        // error
        console.log(err); 
        res.redirect('/register');
      }
      else {
        // success
        req.login(newUser, (err) => { res.redirect('/projects'); });
      }
    }
  );
});

// GET /logout
router.get('/logout', (req, res, next) => {
  req.logout(function(err) {
    res.redirect('/login'); // user gets logged out, session is cleared, and user redirected
  });
});

// GET /github
// this is us sending the user to github.com so they enter their credentials
router.get('/github', passport.authenticate('github', { scope: ['user.email']}));

// GET /github/callback
// this is for when we receive the user back from github.com
router.get('/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }), // unsuccessful login
  (req, res, next) => {
    res.redirect('/projects'); // successful login
  }
)

module.exports = router;