var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// Import Mongoose
var mongoose = require('mongoose');
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

// Configure mongoose after route declarations
// let connStr = 'mongodb+srv://admin:strongpassword2022@cluster0.86msx.mongodb.net/Eduardo';
mongoose.connect(
  config.db, // connection string from MongoDB
  {
    useNewUrlParser: true, // options object
    useUnifiedTopology: true
  })
  .then((message) => console.log('Connected successfully!')) // callback for when conn is OK
  .catch((error) => console.log(error)); // callback for when conn fails


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
