// import necessary modules
const express = require("express");
// create router object
const router = express.Router();
// configure router object
// GET /projects/
router.get("/", (req, res, next) => {
  res.render("projects/index", { title: "Project Tracker" });
});
// GET /projects/add

// export router object
module.exports = router;
