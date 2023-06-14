// Router objects are modules that can be associated to paths
// these contains middleware function associations
var express = require('express');
var router = express.Router();

/* GET home page. */
// relative to app.use() > /
router.get('/', function(req, res, next) {
  // view name is relative to the /views folder
  res.render('index', { title: 'Project Tracker App' });
});

// Option 1) Extend this router to handle another path
// GET handler for /about
// router.get('/about', (req, res, next) => {
//   res.render('about', {title: 'About Us'});
// });

module.exports = router;
