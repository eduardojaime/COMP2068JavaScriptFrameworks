// Represents your web app and all its configurations
// Similar to Program.cs or Startup.cs
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
// importing router objects
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var projectsRouter = require("./routes/projects");
var coursesRouter = require("./routes/courses");
// import mongoose and configs file
var mongoose = require("mongoose");
var configs = require("./config/globals");
// import hbs templating engine to expand it with custom helper functions
var hbs = require("hbs");
// import Authentication related packages
var passport = require("passport");
var session = require("express-session");
var githubStrategy = require('passport-github2').Strategy;
var User = require("./models/user"); // model already contains functionality from plm

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// Configure Authentication modules
// Configure session handling
app.use(session({
  secret: "jsframeworksfall2023",
  resave: false,
  saveUninitialized: false
}));
// Configure passport module
app.use(passport.initialize());
app.use(passport.session());
// Configure local strategy using the model
passport.use(User.createStrategy()); // createStrategy comes from PLM
// Configure passport-github2 with the API keys and user model
// We need to handle two scenarios: new user, or returning user
passport.use(new githubStrategy({
  clientID: configs.github.clientId,
  clientSecret: configs.github.clientSecret,
  callbackURL: configs.github.callbackUrl
},
  // create async callback function
  // profile is github profile
  async (accessToken, refreshToken, profile, done) => {
    // search user by ID
    const user = await User.findOne({ oauthId: profile.id });
    // user exists (returning user)
    if (user) {
      // no need to do anything else
      return done(null, user);
    }
    else {
      // new user so register them in the db
      const newUser = new User({
        username: profile.username,
        oauthId: profile.id,
        oauthProvider: 'Github',
        created: Date.now()
      });
      // add to DB
      const savedUser = await newUser.save();
      // return
      return done(null, savedUser);
    }
  }
));
// Set passport to write/read user data to/from session object
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Routing configuration
app.use("/", indexRouter); // associate router object to a path
app.use("/users", usersRouter);
app.use("/projects", projectsRouter);
app.use("/courses", coursesRouter);
// Connect App to DB
mongoose
  .connect(configs.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((message) => {
    console.log("App connected successfully!");
  })
  .catch((error) => {
    console.log("ERROR while connecting: " + error);
  });

// HBS Helper Functions https://handlebarsjs.com/guide/block-helpers.html#basic-block-variation
hbs.registerHelper("createOptionElement", (listValue, selectedValue) => {
  let selectedProperty = ""; // empty by default
  if (listValue == selectedValue) {
    selectedProperty = "selected";
  }
  let optionElement = `<option ${selectedProperty}>${listValue}</option>`;
  return new hbs.SafeString(optionElement);
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
