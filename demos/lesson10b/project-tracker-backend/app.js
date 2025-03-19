var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var projectsRouter = require('./routes/projects');

// import mongoose and configs object
var mongoose = require("mongoose");
var configs = require("./configs/globals");
// import cors and create policy
var cors = require("cors");
var corsPolicy = {
  origin: "http://localhost:4200", // no slash at the end
  optionsSuccessStatus: 200
}

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
// Middleware
app.use(cors(corsPolicy)); // configure globally for all my endppoints
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// Route configuration
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/projects', projectsRouter);
// Connect to Mongoose
mongoose.connect(configs.ConnectionStrings.MongoDB)
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.log("Error connecting to MongoDB", error));

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
