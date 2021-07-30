// API ROUTER > returns JSON instead of HTML
const express = require('express');
const router = express.Router();

// GET handler for /Projects/
router.get('/', (req, res, next) => {
    const projects = [{ 'id':'100', 'name': 'Project B' }];
    // http is stateless
    return res.json(projects).status(200); // ??? OK Successful 
});

module.exports = router;