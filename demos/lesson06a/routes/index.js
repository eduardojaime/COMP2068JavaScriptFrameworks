var express = require('express');
var router = express.Router();
// Import model
var Project = require('../models/project');

/* GET home page. */
router.get('/', async function(req, res, next) {
  // Get all projects by using the find method in the model object
  let projects = await Project.find();
  console.log(projects);
  // then do something with the list
  res.render('index', { title: 'Express' });
});

module.exports = router;
