var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var hbs = require("hbs");

var indexRouter = require("./routes/index");
// var usersRouter = require('./routes/users');
var projectsRouter = require("./routes/projects");
var coursesRouter = require("./routes/courses");

// Import Mongoose and Configuration modules
var mongoose = require("mongoose");
var configs = require("./configs/globals");

// Import Passport related modules
var passport = require("passport"); // base authentication module
var session = require("express-session"); // module for session handling (cookie)
var User = require("./models/user"); // our User model
var GitHubStrategy = require("passport-github2").Strategy; // GitHub OAuth strategy
// Import Authorization module
var authorization = require("./extensions/authorization");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// Session Configuration https://www.npmjs.com/package/express-session
app.use(
  session({
    secret: "w2024projecttracker",
    saveUninitialized: false,
    resave: false,
  })
);
// Passport Configuration
app.use(passport.initialize());
app.use(passport.session());
// Passport Local Configuration
passport.use(User.createStrategy());
// Configure GitHub Strategy
passport.use(
  new GitHubStrategy(
    // options object
    {
      clientID: configs.Authentication.GitHub.ClientId,
      clientSecret: configs.Authentication.GitHub.ClientSecret,
      callbackURL: configs.Authentication.GitHub.CallbackUrl,
    },
    // callback function
    async (accessToken, refreshToken, profile, done) => {
      // search user by ID
      const user = await User.findOne({ oauthId: profile.id });
      // user exists (returning user)
      if (user) {
        // no need to do anything else
        return done(null, user);
      } else {
        // new user so register them in the db
        const newUser = new User({
          username: profile.username,
          oauthId: profile.id,
          oauthProvider: "Github",
          created: Date.now(),
        });
        // add to DB
        const savedUser = await newUser.save();
        // return
        return done(null, savedUser);
      }
    }
  )
);
// Configure Serialization and Deserialization
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// Routing Configuration
app.use("/", indexRouter);
// app.use('/users', usersRouter);
app.use("/Projects", projectsRouter);
// App.Use needs a path and a list of middleware functions
// in this case, authorization is executed first, and then coursesRouter
app.use("/Courses", authorization, coursesRouter);
// Connect to the DB
mongoose
  .connect(configs.ConnectionStrings.MongoDB)
  .then(() => console.log("Connected successfully!"));
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// HBS helpers
// 1) handling dropdown selection based on a value provided
hbs.registerHelper("createOptionElement", (currentValue, selectedValue) => {
  console.log("Comparing: " + currentValue + " and " + selectedValue);
  var selectedProperty = "";
  if (currentValue == selectedProperty) selectedProperty = "selected";
  return new hbs.SafeString(
    `<option ${selectedProperty}>${currentValue}</option>`
  );
});
// 2) converting a long date into short date format
// Thu Feb 15 2024 19:00:00 GMT-0500 (Eastern Standard Time) ==> 2024/02/15
hbs.registerHelper("toShortDate", (longDateValue) => {
  return new hbs.SafeString(longDateValue.toLocaleDateString("en-CA"));
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
