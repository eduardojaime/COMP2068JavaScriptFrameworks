// Router objects are modules that can be associated to paths
// these contains middleware function associations
var express = require("express");
var router = express.Router();
var User = require("../models/user");
var passport = require("passport");

/* GET home page. */
// relative to app.use() > /
router.get("/", function (req, res, next) {
  // view name is relative to the /views folder
  res.render("index", { title: "Project Tracker App", user: req.user });
});

// Option 1) Extend this router to handle another path
// GET handler for /about
// router.get('/about', (req, res, next) => {
//   res.render('about', {title: 'About Us'});
// });

// GET handler for /login
router.get("/login", (req, res, next) => {
  // retrieve the messages
  let messages = req.session.messages || [];
  // clear messages from session
  req.session.messages = [];
  // send messages to view
  res.render("login", { title: "Login to your Account", messages: messages });
});
// POST handler for /login
router.post(
  "/login",
  passport.authenticate(
    "local", // name of strategy
    {
      successRedirect: "/projects",
      failureRedirect: "/login",
      failureMessage: "Invalid Credentials", // avoid being too specific with this error
    }
  )
);

// GET handler for /register
router.get("/register", (req, res, next) => {
  res.render("register", { title: "Create a new Account" });
});

// POST handler for /register
router.post("/register", (req, res, next) => {
  User.register(
    {
      username: req.body.username,
    },
    req.body.password,
    (err, newUser) => {
      if (err) {
        console.log(err);
        return res.redirect("/register");
      } else {
        req.login(newUser, (err) => {
          res.redirect("/projects");
        });
      }
    }
  );
});

// GET handler for /logout
router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    res.redirect("/login");
  });
});

module.exports = router;
