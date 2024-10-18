// Import dotenv
require("dotenv").config();
// Create configuration object
const configurations = {
    ConnectionString: {
        MongoDB: process.env.CONNECTION_STRING_MONGODB
    }
}
// Export configuration object
module.exports = configurations;