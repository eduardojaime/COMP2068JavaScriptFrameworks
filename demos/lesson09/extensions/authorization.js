// Custom middleware function to check if user is authenticated
// and therefore authorized to perform an actions or view a page
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    // continue with the next middleware to be executed
    return next(); 
  } else {
    // short-circuit the request and redirect to login page
    res.redirect("/login"); 
  }
}
// export so we can configure in app.js and any controller
module.exports = isLoggedIn;