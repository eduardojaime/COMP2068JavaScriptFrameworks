// middleware function that checks whether user is authenticated
// redirects to login page if not
// continues middleware chain if authenticated
function AuthenticationMiddleware(req, res, next) {
  // use request object to call isAuthenticated() method
  // this express method returns true if session is authenticated
  // false otherwise
  if (req.isAuthenticated()) {
    // next() calls the next middleware in the chain
    return next();
  } else {
    res.redirect("/login");
  }
}
// export function so we can reuse it in other files
module.exports = AuthenticationMiddleware;