var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// Import mongoose into the project
const mongoose = require('mongoose');

// Router objects
var indexRouter = require('./routes/index');
var projectsRouter = require('./routes/projects');
var coursesRouter = require('./routes/courses');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Register routes > maps a url path to a router object
app.use('/', indexRouter);
app.use('/projects', projectsRouter);
app.use('/courses', coursesRouter);

// After custom routes, use the connect method to open a connection to your mongodb cluster
let connectionString = 'mongodb+srv://admin:strongpassword2022@cluster0.86msx.mongodb.net/projecttracker';
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((message) => {
    console.log('Connected successfully!');
  })
  .catch((error) => {
    // Use tilde for string interpolation `
    console.log(`Error while connection! ${error}`);
  });


// HBS Helper Method to select values from a dropdown
const hbs = require('hbs');
hbs.registerHelper('createOption', (currentValue, selectedValue) => {
  var selectedProperty = '';
  if (currentValue == selectedValue) {
    selectedProperty = 'selected';
  }

  // Example: <option selected>TO DO</option>
  return new hbs.SafeString('<option '+ selectedProperty +'>' + currentValue + '</option>')

});  

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
