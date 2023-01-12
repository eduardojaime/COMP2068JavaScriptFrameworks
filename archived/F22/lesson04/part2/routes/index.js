var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My App' });
});

// Option 1 > Add in Index
// GET handler to /About
// router.get('/about', (req, res, next) => {
//   res.render('about', { title: 'About Us' });
// });

module.exports = router;
