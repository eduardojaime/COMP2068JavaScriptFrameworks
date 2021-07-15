var express = require('express');
var router = express.Router();
const User = require('../models/user');
const passport = require('passport');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { 
    title: 'Express',
    user: req.user
  });
});

// GET handler for login
router.get('/login', (req, res, next) => {
  // res.render('login', { title: 'Login' });
  // get messages from session object, if null just set as empty list
  let messages = req.session.messages || [];
  // clear messages
  req.session.messages = [];
  // render the view and pass the message list
  res.render('login', { title: 'Login', messages: messages });
});

// POST handler for login
// Syntax will be a bit different since I'll use the passport module directly
router.post('/login', passport.authenticate('local', {
  successRedirect: '/projects',
  failureRedirect: '/login',
  failureMessage: 'Invalid Credentials'
}));

// GET handler for register
router.get('/register', (req, res, next) => {
  res.render('register', { title: 'Create a new Account' });
});

router.post('/register', (req, res, next) => {
  // Call the register method in the User model
  User.register(
    // new user object
    new User({ username: req.body.username }),
    // passport sent separately
    req.body.password,
    // callback function to handle creation of new user
    (err, newUser) => {
      if (err) {
        console.log(err);
        return res.redirect('/register');
      }
      else {
        // log the user in and send them to projects
        req.login(newUser, (err) => { 
          res.redirect('/projects');
        })
      }
    }
  );
});

// GET handler for logout
router.get('/logout', (req, res, next) => {
  // log user out
  req.logout();
  // send to login page
  res.redirect('/login');
})

// GET handler for /github
// User will be send to github.com
router.get('/github', passport.authenticate('github', { scope: ['user.email']}));

// GET handler from /github/callback 
// Users is coming back from github.com
router.get('/github/callback',
  // Handles github authentication token, send user to login if unsuccessful
  passport.authenticate('github', { failureRedirect: '/login' }),
  // If authentication token is valid, processing continues and user is sent to login
  (req, res, next) => { res.redirect('/projects'); }
);

module.exports = router;
