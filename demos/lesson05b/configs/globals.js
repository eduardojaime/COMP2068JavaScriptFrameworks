// Global Configurations
// Import dotenv
require("dotenv").config(); // loads .env file
// Create configuration object
const configurations = {
    ConnectionStrings: {
        MongoDB: process.env.CONNECTION_STRING_MONGODB
    }
}
// Export configuration object
module.exports = configurations;