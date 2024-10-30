var express = require("express");
var router = express.Router();
// use passport middleware to authenticate
var passport = require("passport");
// impor the user model to handle registration
var User = require("../models/user");

/* GET home page. */
router.get("/", async function (req, res, next) {
  res.render("index", {
    title: "Express",
    user: req.user, // request object contains user info after authentication
  });
});

// GET /login > loads the page
router.get("/login", function (req, res, next) {
  // if user is authenticated redirect to projects
  if (req.isAuthenticated()) {
    res.redirect("/projects");
  }
  // handle failure messages
  let messages = req.session.messages || [];
  // reset session messages
  req.session.messages = [];
  // pass messages back to the view to show info box
  res.render("login", { title: "Enter your credentials", messages: messages });
});
// POST /login > user clicks on login button in the form
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/projects",
    failureRedirect: "/login",
    failureMessage: "Invalid credentials", // stored in req.session.messages
  })
);

// GET /register > loads the page
router.get("/register", function (req, res, next) {
  res.render("register", { title: "Create an account" });
});

// POST /register > user clicks on register button in the form
router.post("/register", function (req, res, next) {
  User.register(
    new User({ username: req.body.username }),
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

// GET /logout > ends session and redirects to login
router.get("/logout", function (req, res, next) {
  // callback triggers after logout() operation is done
  req.logout((error) => {
    res.redirect("/login");
  });
});

// GET /github > triggers the GitHub OAuth flow
router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

// GET /github/callback > GitHub redirects here after user authentication
router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: "/projects", // where to send authenticated users
    failureRedirect: "/login", // where to send users who failed to authenticate
  })
);

module.exports = router;
