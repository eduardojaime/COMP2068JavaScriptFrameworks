var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var projectsRouter = require("./routes/projects");
var coursesRouter = require("./routes/courses");
// Import mongoose and global configurations
const mongoose = require("mongoose");
const configs = require("./configs/globals");
// HBS Helper Methods
var hbs = require("hbs");
// Import passport and session modules
var passport = require("passport");
var session = require("express-session");
var User = require("./models/user");
// Express App Object
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// Passport, Session and Strategy configuration
app.use(session({
  secret: "ProjectTracker2025",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
// Add basic auth strategy, configure in User Model
passport.use(User.createStrategy()); // out-of-the-box local strategy creation method from plm package
passport.serializeUser(User.serializeUser()); // these methods were injected via Plugin
passport.deserializeUser(User.deserializeUser());
// Routing Configuration
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/projects", projectsRouter);
app.use('/courses', coursesRouter);
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
