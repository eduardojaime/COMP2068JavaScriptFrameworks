var express = require("express");
var router = express.Router();
var User = require("../models/user");
var passport = require("passport");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { 
    title: "Express",
    user: req.user, // request contains the information about logged in user
  });
});

// GET /login > loads the form
router.get("/login", (req, res, next) => {
  // handle session messages
  let messages = req.session.messages || []; // extracts messages or initializes an empty array
  req.session.messages = []; // resets messages
  res.render("login", { title: "Login with your Credentials", messages: messages });
});

// POST /login > processes the form and log user in
router.post("/login", passport.authenticate(
  "local", 
  {
    successRedirect: "/projects",
    failureRedirect: "/login",
    failureMessage: "Invalid Credentials",
  }
));

// GET /register > loads the form
router.get("/register", (req, res, next) => {
  res.render("register", { title: "Create an Account" });
});
// POST /register > processes the form and create user
router.post("/register", (req, res, next) => {
  // Create a new user, log them in, and redirect to /projects
  // Use out-of-the-box PLM method register that takes three parameters: user data, password, and callback
  User.register(
    new User({ username: req.body.username }),
    req.body.password,
    (err, user) => {
      if (err) {
        console.log("Error registering!", err);
        return res.redirect("/register");
      } else {
        req.login(user, (err) => {
          res.redirect("/projects");
        });
      }
    }
  );
});

// GET /logout > logs the user out
router.get("/logout", (req, res, next) => {
  req.logout((err) => { res.redirect("/login"); });
});

// GET /github > authenticate with GitHub
// Passport will take care of the starting the authentication flow and redirecting user to github.com
router.get("/github", passport.authenticate("github", { scope: ["user:email"] }));

// GET /github/callback > GitHub will redirect here after authentication
router.get("/github/callback", 
  passport.authenticate(
    "github", 
    { 
      successRedirect: "/projects", // if successful, go to projects
      failureRedirect: "/login"  // if not (user clicked cancel), go to login
    }
  )
);

module.exports = router;
