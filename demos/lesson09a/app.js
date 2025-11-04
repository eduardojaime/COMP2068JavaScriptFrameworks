var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// Router Objects
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var projectsRouter = require('./routes/projects');
var mongoose = require('mongoose');
var configs = require('./configs/globals');
var hbs = require('hbs');
var app = express();
// Import passport & session packages
var passport = require('passport');
var session = require('express-session');
// Import user model
var User = require('./models/user');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
// Middleware Configuration
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// configure session middleware
app.use(session(
  {
    secret: "ProjectTracker2025", // secret key to sign the session ID cookie
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // prevent creating session cookie until user logs in
  }
));
app.use(passport.initialize());
app.use(passport.session());
// Initialize Passport Strategies to enable different login mechanisms
// Username/Password strategy (local)
passport.use(User.createStrategy()); // methods comes from PLM plugin
passport.serializeUser(User.serializeUser()); // store user data in session
passport.deserializeUser(User.deserializeUser()); // retrieve user data from session
// Routing Configuration
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/projects', projectsRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// Database Connection
mongoose
  .connect(configs.ConnectionStrings.MongoDB)
  .then(() => {
    console.log("Connected to MongoDB...");
  })
  .catch((err) => {
    console.error("Could not connect to MongoDB...", err);
  });
// Sub-Expressions https://handlebarsjs.com/guide/builtin-helpers.html#sub-expressions
// function name and helper function with parameters
hbs.registerHelper("createOptionElement", (currentValue, selectedValue) => {
  console.log(currentValue + " " + selectedValue);
  // initialize selected property
  var selectedProperty = "";
  // if values are equal set selectedProperty accordingly
  if (currentValue == selectedValue.toString()) {
    selectedProperty = "selected";
  }
  // return html code for this option element
  // return new hbs.SafeString('<option '+ selectedProperty +'>' + currentValue + '</option>');
  return new hbs.SafeString(
    `<option ${selectedProperty}>${currentValue}</option>`
  );
});
// helper function to format date values
hbs.registerHelper('toShortDate', (longDateValue) => {
  return new hbs.SafeString(longDateValue.toLocaleDateString('en-CA'));
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
