var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// // Add About Route here
// router.get('/about', (req, res, next) => {

//   res.render('about', {
//     title: 'About Us',
//     content: 'This is the tools we have used in this exercise:',
//     tools: tools
//   })

//   // Alternatively this can come from MongoDB (or any other DB)
//   let tools = [
//     {
//       'name': 'Node'
//     },
//     {
//       'name': 'Express'
//     },
//     {
//       'name': 'Handlebars'
//     }];

//   res.render('about', {
//     content: 'This is the tools we have used in this exercise:',
//     tools: tools
//   })

// });

module.exports = router;
