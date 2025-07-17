var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
// Routing modules
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var projectsRouter = require("./routes/projects");
// import global configurations and mongoose
var mongoose = require("mongoose");
var configs = require("./configs/globals");
// import cors package
var cors = require("cors");
// define cors policy
var corsOptions = {
  origin: "http://localhost:4200", // allow requests from this origin
  optionSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
// Middleware configurations
app.use(cors(corsOptions)); // enable CORS with specified options
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// Routing Table
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/projects", projectsRouter);
// DB Connection
mongoose
  .connect(configs.ConnectionStrings.MongoDB)
  .then(() => {
    console.log("Connected to MongoDB successfully!");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
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
