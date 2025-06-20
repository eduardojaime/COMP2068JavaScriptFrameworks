var express = require("express");
var router = express.Router();
var User = require("../models/user");
var passport = require("passport");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// GET /login
router.get("/login", function (req, res, next) {
  res.render("login", { title: "Login" });
});

// POST /login
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/projects",
    failureRedirect: "/login",
    failureMessage: "Invalid Credentials",
  })
);

// GET /register
router.get("/register", function (req, res, next) {
  res.render("register", { title: "Register" });
});

// POST /register
router.post("/register", function (req, res, next) {
  // Call the register method on the User model (plm)
  // it will handle password hashing and user creation
  // pass the new user object, password, and a callback function to handle the result
  User.register(
    new User({
      username: req.body.username,
    }),
    req.body.password,
    (error, newUser) => {
      if (error) {
        console.log("Error registering user:", error);
        return res.redirect("/register");
      } else {
        req.login(newUser, (error) => {
          res.redirect("/projects");
        });
      }
    }
  );
});

module.exports = router;
