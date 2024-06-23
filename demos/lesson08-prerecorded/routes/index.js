var express = require("express");
var router = express.Router();
var User = require("../models/user");
var passport = require("passport");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// GET /login > load page
router.get("/login", (req, res, next) => {
  // retrieve messages from session object
  let messages = req.session.messages || []; // initialize as empty array if no messages
  // clear messages from session object
  req.session.messages = [];
  // pass messages to the view
  res.render("login", { title: "Login to Your Account", messages: messages });
});

// POST /login > user clicks on button
router.post("/login", passport.authenticate("local", {
  successRedirect: "/projects",
  failureRedirect: "/login",
  failureMessage: "Invalid Credentials",
}));

// GET /register
router.get("/register", (req, res, next) => {
  res.render("register", { title: "Create a New Account" });
});

// POST /register
router.post("/register", (req, res, next) => {
  // create a new user and redirect to /projects
  User.register(
    // register is a method from passport-local-mongoose
    new User({ username: req.body.username }), // new user object
    req.body.password, // password as string to be encrypted
    (err, newUser) => {
      // callback function to handle errors or redirection
      if (err) {
        console.log(err);
        return res.redirect("/register");
      }
      else {
        req.login(newUser, (err) => { // need to login after registration to initialize session
          res.redirect("/projects");
        });
      }
    }
  );
});

// GET /logout
router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    res.redirect("/login");
  });
});

// GET /github
// triggers when user clicks on the "Login with Github" button on the login page
// user is sent to github.com in order to provide credentials
router.get(
  "/github",
  passport.authenticate("github", { scope: ["user.email"] })
);

// GET /github/callback
router.get(
  "/github/callback", // path
  passport.authenticate("github", { failureRedirect: "/login" }), // github middleware
  (req, res, next) => {
    res.redirect("/projects");
  } // custom middleware (success)
);

module.exports = router;
