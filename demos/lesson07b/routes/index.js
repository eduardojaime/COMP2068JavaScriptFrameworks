var express = require('express');
var router = express.Router();
// Import model
var Project = require('../models/project');

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
