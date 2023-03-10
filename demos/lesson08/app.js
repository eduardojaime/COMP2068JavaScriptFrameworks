var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// import mongoose
var mongoose = require('mongoose');
// import configs
const configs = require('./config/global');
// import passport and express-session
const passport = require('passport');
const session = require('express-session');
// import user model so we can use it to configure local strategy
const User = require('./models/user');

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var projectsRouter = require('./routes/projects');
var coursesRouter = require('./routes/courses');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// configure session https://www.npmjs.com/package/express-session
app.use(session({
  secret: 'projecttracker2023',
  resave: false,
  saveUninitialized: false
}));
// passport initialization
app.use(passport.initialize()); // allows passport to be configured with strategies
app.use(passport.session()); // handles session mechanism
// create and use local strategy
passport.use(User.createStrategy()); // User.createStrategy() comes from plm
// configure user object serialization/deserialization
passport.serializeUser(User.serializeUser()); // User.serializeUser() method comes from plm package
passport.deserializeUser(User.deserializeUser());
// routing rules
app.use('/', indexRouter); // should be public
// app.use('/users', usersRouter);
app.use('/projects', projectsRouter); // has its own custom authorization
app.use('/courses', IsLoggedIn, coursesRouter); // blocks access to anything under courses

// configure connection, after routers
mongoose.connect(configs.db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((message)=>{ console.log('Connected successfully!'); }) // successful connection
  .catch((error)=>{ console.log('Error while connecting: ' + error); }); // error

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

hbs.registerHelper('toShortDate', (longDateValue) => {
  return new hbs.SafeString(longDateValue.toLocaleDateString('en-CA'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Option 2 associate to the routing rule
function IsLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next(); // moves on to the next middleware in the pipeline
  }
  res.redirect('/login'); // public user, send them to login
}

module.exports = app;
