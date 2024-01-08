// Import express and create Router object
const express = require('express');
const router = express.Router();

// GET /Projects
router.get('/', (req, res, next) => {
    res.render('projects/index', { title: "Project List"});
});


// Export router object
module.exports = router;

