var express = require('express');
var router = express.Router();
// Import the User model and passport
const User = require('../models/user');
const passport = require('passport');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET handler for /login
router.get('/login', (req, res, next) => {
  // res.render('login', { title: 'Login' });
  
  // Obtain messages if any
  let messages = req.session.messages || [];
  // Clear messages
  req.session.messages = [];
  // Pass messages to view
  res.render('login', { title: 'Login', messages: messages });
});

// POST handler for /login
// Syntax will be a bit different since login will be handled by passport
router.post('/login', passport.authenticate('local', {
  successRedirect: '/projects',
  failureRedirect: '/login',
  failureMessage: 'Invalid credentials'
}));

// GET handler for /register
router.get('/register', (req, res, next) => {
  res.render('register', { title: 'Create a new account' });
});

//POST handler for /register
router.post('/register', (req, res, next) => {
  // Create a new user based on the information from the page
  // three parameters: new user object, password, callback function
  User.register(new User({
      username: req.body.username
    }),
    req.body.password,
    (err, newUser) => {
      if (err) {
        console.log(err);
        // take user back and reload register page
        return res.redirect('/register');
      }
      else {
        // log user in
        req.login(newUser, (err) => {
          res.redirect('/projects');
        });
      }
    });
});

module.exports = router;
