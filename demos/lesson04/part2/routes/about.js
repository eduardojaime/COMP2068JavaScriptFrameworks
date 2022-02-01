// represents my localhost:3000/about section
// 1) Create the router object
const express = require('express');
const router = express.Router();

// 2) configure the router object
router.get('/', (req, res, next) => {
    let tools = [
        { 'name': 'Node' },
        { 'name': 'Express' },
        { 'name': 'ASP.NET' }
    ];

    res.render('about', { 
        title: 'About Me',
        content: 'Welcome, these are some tools I know:',
        tools: tools
    });
});

// 3) Export the router module so that we can register it in app.js
module.exports = router;