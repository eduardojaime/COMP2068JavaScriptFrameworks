let express = require('express');
let router = express.Router();

// Add About Route
router.get('/', (req, res, next) => {
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
      title: 'This is the About Page',
      content: 'This is the tools we have used in this exercise:',
      tools: tools
    })
  });

module.exports = router;