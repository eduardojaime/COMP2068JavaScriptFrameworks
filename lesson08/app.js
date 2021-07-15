var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// Import Mongoose into the project after installing it
const mongoose = require('mongoose');

// Create router objects
var indexRouter = require('./routes/index');
var projectsRouter = require('./routes/projects');
var coursesRouter = require('./routes/courses');

// Import passport modules
const passport = require('passport');
const session = require('express-session');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Configure passport module https://www.npmjs.com/package/express-session
// secret is a salt value used for hashing
// save forces the session to be saved back to the session store 
// even if it's never modified during the request
app.use(session({
  secret: 's2021pr0j3ctTracker',
  resave: false,
  saveUninitialized: false
}));

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Link passport to the user model
const User = require('./models/user');
passport.use(User.createStrategy());

// Set passport to write/read user data to/from session object
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// Register router objects
app.use('/', indexRouter);
app.use('/projects', projectsRouter);
app.use('/courses', coursesRouter);

// Option 1) Hardcode connection string and connect
let userName = 'admin';
let password = 'comp2068strongpass2021';
let connectionString = `mongodb+srv://${userName}:${password}@cluster0.86msx.mongodb.net/comp2068`;
// Option 2) Add connection string to Config file
// const config = require('./config/globals');
// let connectionString = config.db;

// Use the connect method, and the two handlers to try to connect to the DB
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((message) => {
    console.log('Connected successfully!');
  })
  .catch((error) => {
    console.log(`Error while connecting! ${error}`);
  });

// HBS Helper Method to select values from dropdown lists
const hbs = require('hbs');
// function name and helper function with parameters
hbs.registerHelper('createOption', (currentValue, selectedValue) => {
  // initialize selected property
  var selectedProperty = '';
  // if values are equal set selectedProperty accordingly
  if (currentValue == selectedValue) {
    selectedProperty = 'selected';
  }
  // return html code for this option element
  // return new hbs.SafeString('<option '+ selectedProperty +'>' + currentValue + '</option>');
  return new hbs.SafeString(`<option ${selectedProperty}>${currentValue}</option>`);
});

// helper function to format date values
hbs.registerHelper('toShortDate', (longDateValue) => {
  return new hbs.SafeString(longDateValue.toLocaleDateString('en-CA'));
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
