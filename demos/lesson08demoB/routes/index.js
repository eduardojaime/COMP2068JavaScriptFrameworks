var express = require('express');
var router = express.Router();

const User = require('../models/user');
const passport = require('passport');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', user: req.user });
});

// GET handlers for Login
router.get('/login', (req, res, next) => {
  // res.render('login', { title: "Login to your Account" });
  let messages = req.session.messages || [];
  // clear messages from the session
  req.session.messages = [];
  // Pass the messages to the view
  res.render('login', { title: 'Login to your Account', messages: messages });
});

// POST handler for Login
router.post('/login', passport.authenticate('local', {
  successRedirect: '/projects',
  failureRedirect: '/login',
  failureMessage: 'Invalid Credentials'
}));

// GET handlers for Register
router.get('/register', (req, res, next) => {
  res.render('register', { title: "Create a new Account" });
});

// POST handler for Register
router.post('/register', (req, res, next) => {
  // Use model to register a new user
  User.register(
    // new user object
    new User({
      username: req.body.username
    }),
    // password sent separately > for encryption
    req.body.password,
    // callback function
    (err, newUser) => {
      if (err) {
        console.log(err);
        return res.redirect('/register');
      }
      else {
        req.login(newUser, (err) => {
          res.redirect('/projects');
        });
      }
    });
});

// GET handler for /Logout
router.get('/logout', (req, res, next) => {
  // log the user out using the request object
  req.logout();
  // send them back to login
  res.redirect('/login');
});


// GET handler for /github
router.get('/github', passport.authenticate('github', { scope: ["user.email"] }));

// GET handler for /github/callback
router.get('/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login'}),
  (req, res, next) => {
    res.redirect('/projects');
  }
);


module.exports = router;
