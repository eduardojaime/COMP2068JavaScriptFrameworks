var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var hbs = require("hbs");
// Import configurations file and mongoose to connect to DB
var configs = require("./configs/globals");
var mongoose = require("mongoose");
// Import passport and express-session
var passport = require("passport");
var session = require("express-session");
// Import model and packages for authentication strategies
var User = require("./models/user");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var projectsRouter = require("./routes/projects");
var coursesRouter = require("./routes/courses");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// Use express-session and passport
app.use(session(
  {
    secret: "ProjectTracker2025",
    resave: false,
    saveUninitialized: false, // prevents from creating cookie until logged in
  }
))
app.use(passport.initialize());
app.use(passport.session());
// Implement basic authentication strategy with passport-local and mongoose model
passport.use(User.createStrategy()); // out-of-the-box strategy initialization code from plm
passport.serializeUser(User.serializeUser()); // out-of-the-box serialization code from plm
passport.deserializeUser(User.deserializeUser()); // out-of-the-box deserialization code from plm
// Routing Rules
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/projects", projectsRouter);
app.use('/courses', coursesRouter);
// Connect to MongoDB
mongoose.connect(configs.ConnectionStrings.MongoDB)
  .then(() => { console.log("Connected to MongoDB!"); }) // success
  .catch((err) => { console.log("Error connecting to MongoDB!", err); }); // error

// Sub-Expressions https://handlebarsjs.com/guide/builtin-helpers.html#sub-expressions
// function name and helper function with parameters
hbs.registerHelper("createOptionElement", (currentValue, selectedValue) => {
  // initialize selected property
  var selectedProperty = "";
  // if values are equal set selectedProperty accordingly
  if (currentValue == selectedValue.toString()) {
    selectedProperty = "selected";
  }
  // return html code for this option element
  // return new hbs.SafeString('<option '+ selectedProperty +'>' + currentValue + '</option>');
  return new hbs.SafeString(
    `<option ${selectedProperty}>${currentValue}</option>`
  );
});
// helper function to format date values
hbs.registerHelper('toShortDate', (longDateValue) => {
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
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
