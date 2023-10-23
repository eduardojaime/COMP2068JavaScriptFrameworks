var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const config = require('./config/globals'); // move this to the top of this file
// 1) Import Mongoose into the project after installing it
const mongoose = require('mongoose');
// Import hbs to write custom helper functions
const hbs = require("hbs");
// Import authentication related modules
const passport = require("passport");
const session = require("express-session");
const githubStrategy = require('passport-github2').Strategy;
const User = require("./models/user");

// Create router objects
var indexRouter = require('./routes/index');
var projectsRouter = require('./routes/projects');
var coursesRouter = require("./routes/courses");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// Configure session module https://www.npmjs.com/package/express-session
// secret is a salt value used for hashing
// save forces the session to be saved back to the session store 
// even if it's never modified during the request
app.use(session(
  {
    secret: "fall2023jsframeworks",
    resave: false,
    saveUninitialized: false
  }
));
// Initialize passport and session middleware
app.use(passport.initialize());
app.use(passport.session());
// Configure local strategy
// ALL these methods in USER come from PLM
passport.use(User.createStrategy());
// Configure passport-github2 with the API keys and user model
// We need to handle two scenarios: new user, or returning user
passport.use(new githubStrategy({
  clientID: config.github.clientId,
  clientSecret: config.github.clientSecret,
  callbackURL: config.github.callbackUrl
},
  // create async callback function
  // profile is github profile
  async (accessToken, refreshToken, profile, done) => {
    // search user by ID
    const user = await User.findOne({ oauthId: profile.id });
    // user exists (returning user)
    if (user) {
      // no need to do anything else
      return done(null, user);
    }
    else {
      // new user so register them in the db
      const newUser = new User({
        username: profile.username,
        oauthId: profile.id,
        oauthProvider: 'Github',
        created: Date.now()
      });
      // add to DB
      const savedUser = await newUser.save();
      // return
      return done(null, savedUser);
    }
  }
));
// set passport to write/read user data to/from session object
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Register router objects
app.use('/', indexRouter);
app.use('/projects', projectsRouter);
app.use('/courses', coursesRouter);

// Option 1) Hardcode connection string and connect
// let userName = 'admin';
// let password = '<password>';
// let connectionString = `mongodb+srv://${userName}:${password}@cluster0.86msx.mongodb.net/comp2068`;

// Option 2) Add connection string to Config file
let connectionString = config.db;

// Use the connect method, and the two handlers to try to connect to the DB
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((message) => {
    console.log('Connected successfully!');
  })
  .catch((error) => {
    console.log(`Error while connecting! ${error}`);
  });

// HBS Helper Functions
hbs.registerHelper('createOptionElement', (currentVal, selectedVal)=>{
  // currentVal comes from list of courses
  // selectedVal comes from project.course
  console.log(selectedVal);
  let selectedProperty = '';
  if (currentVal == selectedVal) { selectedProperty = 'selected'; }
  return new hbs.SafeString('<option ' + selectedProperty + '>' + currentVal + '</option>');
  // return new hbs.SafeString(`<option ${selectedProperty}>${selectedVal}</option>`);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
