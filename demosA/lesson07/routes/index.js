var express = require('express');
var router = express.Router();
// import User model
const User = require('../models/user');
const passport = require('passport');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET handler for /login
router.get('/login', (req, res, next) => {
  // extract messages from session or create an empty list if these don't exist
  let messages = req.session.messages || []; 
  // clear messages
  req.session.messages = [];
  // pass messages to the view
  res.render('login', { title: 'Login to your Account', messages: messages });
});

// POST handler for /login
// use passport out of the box middleware to authenticate user
router.post('/login', passport.authenticate('local', {
  successRedirect: '/projects',
  failureRedirect: '/login',
  failureMessage: 'Invalid Credentials'
}));

// GET handler for /register
router.get('/register', (req, res, next) => {
  res.render('register', { title: 'Sign up for an Account' });
});

// POST handler for /register
router.post('/register', (req, res, next) => {
  // Create a new user based on the info sent
  User.register(
    new User({
      username: req.body.username
    }), // new user object with info from the request
    req.body.password, // password (so that it can be encrypted)
    (err, newUser) => { // callback function to handle success/fail
      if (err) {
        // If there's an error we'll send the user back to register
        console.log(err);
        res.redirect('/register');
      }
      else {
        // else log the user in and redirect to /projects
        req.login(newUser, (err) => { res.redirect('/projects'); });
      }
    }
  );
});

module.exports = router;
