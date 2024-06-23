var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
// Router Objects
var indexRouter = require("./routes/index");
// var usersRouter = require('./routes/users');
var projectsRouter = require("./routes/projects");
var coursesRouter = require("./routes/courses");
// Database Connectivity
var mongoose = require("mongoose");
var globals = require("./configs/globals"); // global variables
// Import HBS package to add helper functions
var hbs = require("hbs");
// Import Passport and Session modules
var passport = require("passport");
var session = require("express-session");
var User = require("./models/user");
// Create and configure app object
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
// Middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// Configure Session object https://www.npmjs.com/package/express-session
app.use(session({
  secret: "projecttracker2024", // value used to sign the session ID cookie
  resave: false, // flag: save session even if not modified
  saveUninitialized: false // flag: save session even if not used
}));
// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());
// Initialize Passport Strategy
passport.use(User.createStrategy()); // createStrategy() comes from plm package
// Configure Passport to serialize and deserialize user data
passport.serializeUser(User.serializeUser()); // serializeUser() comes from plm package
passport.deserializeUser(User.deserializeUser()); // deserializeUser() comes from plm package
// Route Definitions
app.use("/", indexRouter);
// app.use('/users', usersRouter);
app.use("/projects", projectsRouter);
app.use("/courses", coursesRouter);
// Connect to MongoDB
mongoose
  .connect(globals.ConnectionString.MongoDB)
  .then(() => {
    console.log("Connected successfully to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

// Register custom helpers function for HBS
// Convert long date to short date
hbs.registerHelper("toShortDate", (longDateValue) => {
  return new hbs.SafeString(longDateValue.toLocaleDateString("en-CA"));
});
// Compares two values and if they are equal, returns a selected option element
hbs.registerHelper("createOptionElement", (currentValue, selectedValue) => {
  console.log(currentValue + " " + selectedValue);
  // initialize selected property
  var selectedProperty = "";
  // if values are equal set selectedProperty accordingly
  if (currentValue == selectedValue.toString()) {
    selectedProperty = "selected";
  }
  // return html code for this option element
  return new hbs.SafeString(
    `<option ${selectedProperty}>${currentValue}</option>`
  );
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
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
