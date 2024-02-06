// Naming convention > routers are plural
// Import express and create a router object
const express = require("express");
const router = express.Router();
// Configure GET/POST handlers
// GET /Projects/
router.get("/", (req, res, next) => {
    // relative to the views folder
    res.render("projects/index", { title: "Projects" });
});
// Export router module
module.exports = router;