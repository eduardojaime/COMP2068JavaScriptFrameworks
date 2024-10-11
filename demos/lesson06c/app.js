var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var projectsRouter = require("./routes/projects");

// Import mongoose and the configurations object
var mongoose = require("mongoose");
var configs = require("./configs/globals");
// Import HBS to register helper methods
var hbs = require("hbs");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
// Middleware configuration
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// Route configuration
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/projects", projectsRouter);
// Connect to MongoDB after the route configuration
// Use method chaining
mongoose
  .connect(configs.ConnectionString.MongoDB)
  .then(() => {
    console.log("Connected to MongoDB...");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB: ", error);
  });
// HBS helper methods
// Register a helper method to convert the date to short format
hbs.registerHelper("toShortDate", (longDateValue) => {
  // receives Oct 10, 2024 10:00:00 and returns 2024-10-10
  return new hbs.SafeString(longDateValue.toLocaleDateString("en-CA"));
});

// Register a helper method to compare to values and render an option element with selected
hbs.registerHelper("createOptionElement", (currentValue, selectedValue) => {
  if (currentValue === selectedValue) {
    // option element will be preselected when page loads
    return new hbs.SafeString(`<option selected>${currentValue}</option>`);
  }
  else {
    // nothing selected
    return new hbs.SafeString(`<option>${currentValue}</option>`);
  }
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
