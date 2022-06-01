var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Option 1 and the easiest
// router.get('/about', (req, res, next) => {
//   // tell express to render an hbs view template
//   // pass a JSON object to the view if you
//   res.render('about', 
//     { 
//       email: "contact@company.com",
//       title: "About our Project"
//     });
// });

module.exports = router;
