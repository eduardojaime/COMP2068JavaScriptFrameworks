// '/' > home page
var express = require('express');
var router = express.Router();

/* GET home page. */
// app.VERB
// router.VERB > GET
router.get('/', function(req, res, next) {
  // renders a view file called index
  // and passes data as JSON object
  res.render('index', { title: 'Express' });
});

module.exports = router;
