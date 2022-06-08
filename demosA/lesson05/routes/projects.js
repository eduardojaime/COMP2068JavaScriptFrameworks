// import express
const express = require('express');
// create router object
const router = express.Router();

// configure routes
// GET handler /Projects/
router.get('/', (req, res, next) => {
    res.render('projects/index', { title: "Welcome to Project Tracker 2022! "});
});

// export router object
module.exports = router;