// Option 2) Create its own router object
// create a router object
const express = require('express');
const router = express.Router();
// paths in this file are relative to the path which was configured for the object in app.js
// in this case /about
// register middleware functions
// GET /about/
router.get('/', (req, res, next) => {
  // simulates going to the DB and getting a list of tools
  let toolset = [
    {
      'name':'Node'
    },
    {
      'name':'Express'
    },
    {
      'name': 'Handlebars'
    }
  ];

  // pass view name, and optionally some data in JSON format
  res.render('about', {
    title: 'About Me',
    tools: toolset
  });
});
// export the router object so that you can configure it in app.js
module.exports = router;