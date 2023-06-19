var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// import config obj and mongoose package
var configs = require('./configs/globals');
var mongoose = require('mongoose'); // install via npm, this allows our app to connect to MongoDB
// import passport and session modules
var passport = require('passport');
var session = require('express-session');
// import User model
var User = require('./models/user');

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users'); << won't use
// import new router objects
var aboutRouter = require('./routes/about');
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
// configure session module, specify: secret value for hashing, two options
// https://www.npmjs.com/package/express-session
app.use(session({
  secret: 's2023projecttracker',
  resave: false,
  saveUninitialized: false
}));
// configure passport initialization
app.use(passport.initialize());
app.use(passport.session()); 
// what strategy would you want to implement??? 
// implement local strategy (username/password)
passport.use(User.createStrategy()); // createStrategy() comes from plm module
// tell passport how to serialize/deserialize user data
passport.serializeUser(User.serializeUser()); // method comes from plm
passport.deserializeUser(User.deserializeUser());
// TODO: implement oauth strategy

// ROUTING MECHANISM
app.use('/', indexRouter);
// app.use('/users', usersRouter); << won't use
// associate new paths and router objects
// anything under /about is handled by this router
app.use('/about', aboutRouter);
app.use('/projects', projectsRouter);
app.use('/courses', coursesRouter);

// connect to the db after registering router objects
mongoose
  .connect(configs.db, { useNewUrlParser: true, useUnifiedTopology: true })
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
// longDateValue = 'Tue Jun 13 2023 20:00:00 GMT-0400 (Eastern Daylight Time)'
hbs.registerHelper('toShortDate', (longDateValue) => {
  return new hbs.SafeString(longDateValue.toLocaleDateString("en-CA"));
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

module.exports = app;
