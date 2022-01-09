var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Create a router object
var indexRouter = require('./routes/index');
var projectsRouter = require('./routes/projects');
var coursesRouter = require('./routes/courses');

// Import passport and session
const passport = require('passport');
const session = require('express-session');
// Import strategy class from passport-github2 package
const githubStrategy = require('passport-github2').Strategy;
// Import global configs file
const config = require('./config/globals');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// configure session
// https://www.npmjs.com/package/express-session
app.use(session({
  secret: 's2021projectTracker',
  resave: false,
  saveUninitialized: false
}));

// initialize and set passport session
app.use(passport.initialize());
// makes sure passport uses express-session to handle user session
app.use(passport.session());

// Link passport to a user model
const User = require('./models/user');
// Configure strategy to use: Local Strategy
passport.use(User.createStrategy());
// Configure strategy to use: Github Strategy
passport.use(new githubStrategy(
  {
    clientID: config.github.clientId,
    clientSecret: config.github.clientSecret,
    callbackURL: config.github.callbackURL
  },
  // callback function handle whether there's already a user in the DB
  async (accessToken, refreshToken, profile, done) => {
    // determine if we already have a user in our DB
    const user = await User.findOne({ oauthId: profile.id });
    // Handle new or returning user
    if (user) {
      // returning user, already in my db
      return done(null, user);
    }
    else {
      // user doesn't exist in my db
      const newUser = new User(
        {
          username: profile.username,
          oauthId: profile.id,
          oauthProvider: 'Github',
          created: Date.now()
        }        
      );
      const savedUser = await newUser.save();

      return done(null, savedUser);
    }
  }
));

// Set passport to write/read user data to/from session object
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// register path with the router
app.use('/', indexRouter);
app.use('/projects', projectsRouter);
app.use('/courses', coursesRouter);

// After all the custom routers/controllers
// Import mongoose into the project
const mongoose = require('mongoose');
// Create connection string and modify password and database
const connectionString = 'mongodb+srv://admin:<password>@cluster0.86msx.mongodb.net/comp2068';
// call connect method of mongoose object, pass connection string and options
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((message) => {
    console.log('Connected successfully!');
  })
  .catch((err) => {
    console.log(err);
  });

// HBS helper method to select values from dropdown lists
const hbs = require('hbs');

hbs.registerHelper('createOption', (currentValue, selectedValue) => {
  //initialize a attribute
  var selectedAttribute = '';
  if (currentValue == selectedValue) {
    selectedAttribute = 'selected'
  }
  // render html code for an <option> element
  // it will render <option selected>Text</option> if this is the selected option in Mongo
  return new hbs.SafeString("<option " + selectedAttribute +">" + currentValue + "</option>");
});

hbs.registerHelper('toShortDate', (longDateValue) =>{
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
