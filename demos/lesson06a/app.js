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
