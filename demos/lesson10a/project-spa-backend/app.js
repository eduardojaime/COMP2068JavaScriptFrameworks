var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var projectsRouter = require('./routes/projects');

// Import mongoose
var mongoose = require("mongoose");
var configs = require("./config/globals");
// Import and configure CORS policy
var cors = require("cors");
var cors_options = {
  origin: "http://localhost:4200", // my Angular server
  optionsSuccessStatus: 200
};

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// Enable CORS policy
app.use(cors(cors_options)); // only allow requests from my Angular server

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/projects', projectsRouter); // assign to path

// Connect to the DB
mongoose
  .connect(configs.ConnectionString.MongoDB)
  .then(() => { console.log("Connected to the database"); })
  .catch((error) => { console.log("Error connecting to the database", error); });
    

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
