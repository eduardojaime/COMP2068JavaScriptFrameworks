var express = require('express');
var router = express.Router();
const User = require('../models/user');
const passport = require('passport');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET handler for /login
router.get('/login', (req, res, next) => {
  // retrieve messages from session object
  let messages = req.session.messages || []; // if undefined then set as empty list
  // clear messages as soon as you retrieve them
  console.log(messages);
  
  req.session.messages = [];
  // pass to the view
  res.render('login', { title: 'Log in to your account', messages: messages });
});

// POST handler for /login
router.post('/login', passport.authenticate('local', {
  successRedirect: '/projects',
  failureRedirect: '/login',
  failureMessage: 'Invalid crendentials'
}));

// GET handler for /register
router.get('/register', (req, res, next) => {
  res.render('register', { title: 'Create a new account' });
});

// POST handler for /register
router.post('/register', (req, res, next) => {
  // Create a new user in the DB based on the information provided
  User.register( // register() comes from PLM
    new User({
      username: req.body.username
    }),  // new user object
    req.body.password, // password to be encrypted 
    (err, newUser) => {// callback function to handle the result
      if (err) {
        console.log(err);
        res.redirect('/register');
      }
      else {
        req.login(newUser, (err) => { // log user in and send them to /projects
          res.redirect('/projects');
        });
      }
    }
  );
});


module.exports = router;
