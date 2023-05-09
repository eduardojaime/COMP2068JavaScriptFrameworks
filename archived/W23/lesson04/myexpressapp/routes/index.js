var express = require('express');
var router = express.Router();

// any path here is relative to the path that this router is associated with in app.js
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// Option 1) extend index router
// router.get('/about', (req, res, next) => {
//   // res.send('PLACEHOLDER FOR ABOUT PAGE'); // no view
//   res.render('about', { title: "About Us" });
// });

module.exports = router;
