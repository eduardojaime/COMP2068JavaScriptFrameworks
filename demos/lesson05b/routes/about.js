// import express
const express = require("express");
// create router object
const router = express.Router();
// configure router object (associate middlewares to paths)
// All paths in here are relative to /about
// GET handler for /about/
router.get("/", (req, res, next) => {
  res.render("about", { title: "About Us" });
});
// export router object
module.exports = router;
