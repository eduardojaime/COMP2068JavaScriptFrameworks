var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var projectsRouter = require("./routes/projects");

// Import mongoose and the configurations object
var mongoose = require("mongoose");
var configs = require("./configs/globals");
// Import HBS to register helper methods
var hbs = require("hbs");
// Import passport and session modules
var passport = require("passport");
var session = require("express-session");
var User = require("./models/user");
var GitHubStrategy = require("passport-github2").Strategy;

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
// Middleware configuration
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// Configure session and passport
// https://www.npmjs.com/package/express-session
app.use(session({
  secret: "ProjectTracker", // value used to sign the session ID cookie
  resave: false, // prevents session from being saved if empty
  saveUninitialized: false, 
}));
app.use(passport.initialize());
app.use(passport.session());
// Local strategy configuration
passport.use(User.createStrategy()); // these 3 methods are coming from PLM
// GitHub strategy configuration
passport.use(new GitHubStrategy(
  {
    clientID: configs.Authentication.GitHub.clientID,
    clientSecret: configs.Authentication.GitHub.clientSecret,
    callbackURL: configs.Authentication.GitHub.callbackURL,
  },
  async (accessToken, refreshToken, profile, done) => {
    // find user
    const user = await User.findOne({ oauthID: profile.id });
    // if it exists return done(null, user)
    if (user)
      return done(null, user);
    // if null then create
    else 
    {
      const newUser = new User({
        username: profile.username,
        oauthID: profile.id,
        oauthProvider: "GitHub",
      });
      let savedUser = await newUser.save();
      return done(null, savedUser);
    }
  }  
));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser()); 
// Route configuration
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/projects", projectsRouter);
// Connect to MongoDB after the route configuration
// Use method chaining
mongoose
  .connect(configs.ConnectionString.MongoDB)
  .then(() => {
    console.log("Connected to MongoDB...");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB: ", error);
  });
// HBS helper methods
// Register a helper method to convert the date to short format
hbs.registerHelper("toShortDate", (longDateValue) => {
  // receives Oct 10, 2024 10:00:00 and returns 2024-10-10
  return new hbs.SafeString(longDateValue.toLocaleDateString("en-CA"));
});

// Register a helper method to compare to values and render an option element with selected
hbs.registerHelper("createOptionElement", (currentValue, selectedValue) => {
  if (currentValue === selectedValue) {
    // option element will be preselected when page loads
    return new hbs.SafeString(`<option selected>${currentValue}</option>`);
  }
  else {
    // nothing selected
    return new hbs.SafeString(`<option>${currentValue}</option>`);
  }
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
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
