var express = require('express');
var router = express.Router();

const passport = require('passport');
const User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Add GET / POST handler to handle the login funtionality
router.get('/login', (req, res, next) => {
  if (req.user) {
    res.redirect('/projects');
  }
  // res.render('login', { title: 'Login' });
  let messages = req.session.messages || [];
  req.session.messages = [];
  res.render('login', { title: 'Login', messages: messages });
  
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/projects',
  failureRedirect: '/login',
  failureMessage: 'Invalid Credentials'
}));

router.get('/register', (req, res, next) => {
  if (req.user) {
    res.redirect('/projects');
  }
  res.render('register', { title: 'Sign Up!' });
});

router.post('/register', (req, res, next) => {
  User.register(
    new User({ username: req.body.username }), // new user to be created
    req.body.password, // password sent separately
    (err, newUser) => { // callback function to handle the result of this operation
      if (err) {
        console.log(err);
        return res.redirect('/register');
      }
      else {
        req.login(newUser, (err) => {
          res.redirect('/projects');
        });
      }
    })
});


// GET handler for /logout
router.get('/logout', (req, res, next) => {
  // do we log the user out??
  req.logout(); // clears user session and logs them out
  // what do we do next??
  res.redirect('/login');
});

module.exports = router;
