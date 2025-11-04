// Middleware function to check if user is authenticated
function AuthenticationMiddleware(req, res, next) {
  if (req.isAuthenticated()) {
    return next(); // continues the request processing pipeline
  } else {
    res.redirect("/login"); // short-circuits the pipeline and sends user to login page, no further processing is done
  }
}
module.exports = AuthenticationMiddleware;
