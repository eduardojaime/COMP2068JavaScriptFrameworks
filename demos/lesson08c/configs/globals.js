// Import dotenv
require("dotenv").config();
// Create configuration object
const configurations = {
    ConnectionString: {
        MongoDB: process.env.CONNECTION_STRING_MONGODB
    },
    Authentication: {
        GitHub: {
            clientID: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            callbackURL: process.env.GITHUB_CALLBACK_URL
        }
    }
}
// Export configuration object
module.exports = configurations;