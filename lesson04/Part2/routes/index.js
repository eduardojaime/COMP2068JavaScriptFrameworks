var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Add About Route
router.get('/about', (req, res, next) => {
  // Alternatively this can come from MongoDB (or any other DB)
  let tools = [
    {
      'name': 'Node'
    },
    {
      'name': 'Express'
    },
    {
      'name': 'Handlebars'
    }];

  res.render('about', {
    content: 'This is the tools we have used in this exercise:',
    tools: tools
  })

});

module.exports = router;
