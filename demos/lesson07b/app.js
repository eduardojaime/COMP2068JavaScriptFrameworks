var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
// import configs and mongoose
var configs = require("./configs/globals");
var mongoose = require("mongoose");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var projectsRouter = require("./routes/projects");

// import HBS to add helper functions for my views
var hbs = require("hbs");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// Route Configuration
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/projects", projectsRouter);

// connect to MongoDB after the routes and middleware configurations
// use method chaining > connect().then().catch()
mongoose
  .connect(configs.ConnectionStrings.MongoDB)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

// HBS Helper Functions
// Returns a date in short date format string
hbs.registerHelper("toShortDate", (longDateValue) => {
  return new hbs.SafeString(longDateValue.toLocaleDateString("en-CA"));
});

// Compares two values and returns a corresponding option element for a select input
hbs.registerHelper("createOptionElement", (currentValue, selectedValue) => {
  if (currentValue === selectedValue) {
    return new hbs.SafeString("<option selected>" + currentValue + "</option>");
  } else {
    return new hbs.SafeString("<option>" + currentValue + "</option>");
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
