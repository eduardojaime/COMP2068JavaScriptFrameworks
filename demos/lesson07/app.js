var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var hbs = require("hbs");

var indexRouter = require("./routes/index");
// var usersRouter = require('./routes/users');
var projectsRouter = require("./routes/projects");
var coursesRouter = require("./routes/courses");
// Import passport and session modules
var passport = require('passport');
var session = require('express-session');
// Import user model
var User = require('./models/user');
// Import Mongoose and Configuration modules
var mongoose = require("mongoose");
var configs = require("./configs/globals");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// Configure passport module https://www.npmjs.com/package/express-session
app.use(session({
  secret: 'w2024pr0j3ctTracker',
  resave: false,
  saveUninitialized: false
}));
// Initialize passport
app.use(passport.initialize());
app.use(passport.session());
// Link passport to the user model
passport.use(User.createStrategy());
// Set passport to write/read user data to/from session object
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// Routing Configuration
app.use("/", indexRouter);
// app.use('/users', usersRouter);
app.use("/Projects", projectsRouter);
app.use("/Courses", coursesRouter);
// Connect to the DB
mongoose
  .connect(configs.ConnectionStrings.MongoDB)
  .then(() => console.log("Connected successfully!"));
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// HBS helpers
// 1) handling dropdown selection based on a value provided
hbs.registerHelper("createOptionElement", (currentValue, selectedValue) => {
  console.log("Comparing: " + currentValue + " and " + selectedValue);
  var selectedProperty = "";
  if (currentValue == selectedProperty) selectedProperty = "selected";
  return new hbs.SafeString(
    `<option ${selectedProperty}>${currentValue}</option>`
  );
});
// 2) converting a long date into short date format
// Thu Feb 15 2024 19:00:00 GMT-0500 (Eastern Standard Time) ==> 2024/02/15
hbs.registerHelper("toShortDate", (longDateValue) => {
  return new hbs.SafeString(longDateValue.toLocaleDateString("en-CA"));
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
