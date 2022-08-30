var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// Install and import mongoose
var mongoose = require('mongoose');
// Import configuration file
var config = require('./config/globals');

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var projectsRouter = require('./routes/projects');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/projects', projectsRouter);

// After route declarations
// Connect to mongoose using the connection string you already have
// const connStr = 'mongodb+srv://admin:strongpassword2022@cluster0.86msx.mongodb.net/ProjectTrackerB';
// it's better to use global configuration files
mongoose.connect(config.db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((message) => console.log('Connected successfully!')) // connection was successfull
  .catch((error) => console.log(error)); // connection failed

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
