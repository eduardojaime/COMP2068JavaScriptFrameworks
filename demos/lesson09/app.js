// Equivalent to Program.cs
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// Load router object
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var projectsRouter = require('./routes/projects');
// Load mongoose and global configurations
var mongoose = require('mongoose');
var configs = require('./configs/globals');
// Load passport and related modules
var passport = require('passport');
var session = require('express-session');
// Load the User model that contains passport-local-mongoose functionality
var User = require('./models/user');
// Load GitHub strategy for OAuth authentication
var GitHubStrategy = require('passport-github2').Strategy;

// App object creation
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// Configure session middleware
app.use(session(
  {
    secret: '2026jsframeworks', // Replace with a strong secret in production
    resave: false,
    saveUninitialized: false // prevents storing empty sessions
  }
));
// Add passport and session middleware
app.use(passport.initialize());
app.use(passport.session());
// Configure passport strategies and serialization/deserialization here
passport.use(User.createStrategy()); // Uses plm provided functionality
// Additional Strategy for GitHub OAuth
passport.use(new GitHubStrategy({
    clientID: configs.Authentication.GitHub.ClientID,
    clientSecret: configs.Authentication.GitHub.ClientSecret,
    callbackURL: configs.Authentication.GitHub.CallbackURL
  },
  async function(accessToken, refreshToken, profile, done) {
    // TODO find user in the db, if exists do nothing, else create it
    const user = await User.findOne({ oauthId: profile.id });
    if (user) {
      return done(null, user);
    } else {
      const newUser = new User({
        username: profile.username,
        oauthId: profile.id,
        oauthProvider: 'github'
      })
      const savedUser = await newUser.save();
      return done(null, savedUser);
    }
  }
));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Routing Tables
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/projects", projectsRouter);

// Connect to MongoDB using Mongoose
mongoose
  .connect(configs.ConnectionStrings.MongoDB)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));
  
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
// Export the app object so it can be mounted on a server
module.exports = app;
