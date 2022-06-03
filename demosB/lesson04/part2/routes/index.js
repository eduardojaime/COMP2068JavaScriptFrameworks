var express = require('express');
var router = express.Router();

/* GET home page. */
// These routes are relative to the path that was configured in app.js
// in this case this is the base path '/'
router.get('/', function (req, res, next) {
  res.render('index', { title: 'JS Frameworks' });
});

// Option 1) Reuse an existing router
// router.get('/about', (req, res, next) => {
//   // simulates going to the DB and getting a list of tools
//   let toolset = [
//     {
//       'name':'Node'
//     },
//     {
//       'name':'Express'
//     },
//     {
//       'name': 'Handlebars'
//     }
//   ];

//   // pass view name, and optionally some data in JSON format
//   res.render('about', {
//     title: 'About Me',
//     tools: toolset
//   });
// });

module.exports = router;
