// Import express
const express = require('express');
const router = express.Router();

// GET /projects/
router.get('/', (req, res, next) => {
    res.render('projects/index', { title: "Welcome to Project Tracker 2022" });
});

// make router available to be used in app.js
module.exports = router;