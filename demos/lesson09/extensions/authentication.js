// This is a middleware function that can be imported and used in any route that requires authentication
// It checks if user is logged in (req.user not null) and if not, redirects to the login page
function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        next(); // trigger the next middleware function in the pipeline
    } else {
        // route processing stops here
        res.redirect("/login");
    }
}
// Export the function so it can be imported in other files
module.exports = ensureAuthenticated;