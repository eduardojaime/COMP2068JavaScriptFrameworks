// Option 2) create its own router js file
// Import express and create a router object
const express = require('express');
const router = express.Router();

// configure routes
// router are already registered to a specific route
// intention is to register this object to '/about' in the app.js file
// GET to /About/ 
router.get('/', (req, res, next) => {
  // tell express to render an hbs view template
  // pass a JSON object to the view if you
  res.render('about', 
    { 
      email: "contact@company.com",
      title: "About our Project"
    });
});

// export the router object
module.exports = router;