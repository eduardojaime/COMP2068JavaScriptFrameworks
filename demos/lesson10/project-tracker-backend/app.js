var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// import config file and mongoose
var config = require('./config/global');
var mongoose = require('mongoose');
// easy cors install to allow all origins
var cors = require('cors');

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var projectsRouter = require('./routes/api/projects');

var app = express();

// use cors to allow all origins
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);
// best practice is to keep api endpoints under an api folder
app.use('/api/projects', projectsRouter);

// configure connection after routers
mongoose.connect(config.db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((message)=> { console.log('Connected successfully!');})
  .catch((error)=>{ console.log('Error while connecting: ' + error);})

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
