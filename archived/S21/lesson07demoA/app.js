var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// import mongoose
const mongoose = require('mongoose');

// create the router/controller object
var indexRouter = require('./routes/index');
var projectsRouter = require('./routes/projects');
const coursesRouter = require('./routes/courses');

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

// Configure passport session cookie
app.use(session({
  secret: 's2021projectTracker',
  resave: false,
  saveUninitialized: false
}));

// Initialize passport
app.use(passport.initialize());
// Makes sure passport uses the configured session (express-session)
app.use(passport.session());

// Link passport to the user model
const User = require('./models/user');
// use default local strategy > username/password
passport.use(User.createStrategy());
// set passport to write/read user data to/from session object
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// Use the router object associated to a path
app.use('/', indexRouter);
app.use('/projects', projectsRouter);
app.use('/courses', coursesRouter);

// After all the use methods for my routes
// need a connection string
const connectionString = 'mongodb+srv://admin:<password>@cluster0.86msx.mongodb.net/comp2068';
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((message) => {
    console.log('Connected successfully!');
  })
  .catch((err) => {
    console.log(err);
  });

// Register hbs helper function for selecting options in dropdown list
const hbs = require('hbs');

hbs.registerHelper('createOption', (currentValue, selectedValue) => {
  var selectedAttribute = '';
  if (currentValue == selectedValue) {
    selectedAttribute = 'selected';
  }
  // use templates for simplicity
  // return new hbs.safeString(`<option ${selectedAttribute}>${currentValue}</option>`);
  return new hbs.SafeString('<option '+ selectedAttribute +'>' + currentValue + '</option>');
});

// Converts long date to yyyy-MM-dd
hbs.registerHelper('toShortDate', (longDateValue)=>{
  return new hbs.SafeString(longDateValue.toLocaleDateString("en-CA"));
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
