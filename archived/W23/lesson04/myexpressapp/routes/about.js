// need to create router object
const express = require("express");
const router = express.Router();
// configure middleware functions
// remember: all paths here are relative to the path specified in app.js
// /about
// GET /about/
router.get("/", (req, res, next) => {
  res.render("about", { title: "This is Us" });
});
// export the router object to use it in app.js
module.exports = router;