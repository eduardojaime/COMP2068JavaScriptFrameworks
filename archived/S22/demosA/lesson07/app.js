var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// Import Mongoose
var mongoose = require('mongoose');
var config = require('./config/globals');
var hbs = require('hbs');
// Import Passport and Session modules and User model
var passport = require('passport');
var session = require('express-session');
var User = require('./models/user');

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
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

// Initialize and configure the session object
app.use(session({
  secret: 'projecttracker2022',
  resave: false,
  saveUninitialized: false
}));

// before route declarations 
// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Link passport to the user model to implement local strategy (username/password)
passport.use(User.createStrategy());
// Set passport to write/read user data from/to session object
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/projects', projectsRouter);
app.use('/courses', coursesRouter);

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


// Add HBS helper methods for formatting dates and selecting values from dropdowns
hbs.registerHelper('createOption', (currentValue, selectedValue)=>{
  // initialize selected property
  var selectedProperty = '';
  // if values are equal, set the selected property
  if (currentValue.toUpperCase() == selectedValue.toUpperCase()) {
    selectedProperty ='selected';
    //console.log('selected ' + currentValue);
  }
  // generate html code for the option element with the selected property
  var option = '<option ' + selectedProperty + '>' + currentValue + '</option>';
  //console.log(option);
  return new hbs.SafeString(option); // <option>VALUE</option>
});

hbs.registerHelper('toShortDate', (longDateValue)=>{
  return new hbs.SafeString(longDateValue.toLocaleDateString('en-CA'));
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
