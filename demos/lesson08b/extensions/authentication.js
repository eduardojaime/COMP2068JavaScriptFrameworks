// Reusable middleware function that checks for the authenticated user, and redirects to /login if not found
function AuthenticationMiddleware(req, res, next) {
    if (req.isAuthenticated()) { // request method provided by passport
        return next(); // user is authenticated, proceed to the next middleware function
    }
    else {
        res.redirect("/login"); // user is not authenticated, redirect to login
    }
}

module.exports = AuthenticationMiddleware;