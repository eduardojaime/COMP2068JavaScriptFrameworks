var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET /login > render the form
router.get("/login", (req, res, next) => {
  res.render("login", { title: "Login to your Account" });
});

// TODO POST /login > click on the button in the form

// GET /register
router.get("/register", (req, res, next) => {
  res.render("register", { title: "Create a New Account" });
});

// TODO POST /register

module.exports = router;
