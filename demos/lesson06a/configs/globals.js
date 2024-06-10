// initialize .env
require("dotenv").config();
// Global configuration object that will contain app level variables such as:
// client secrets, API keys, database connection strings, etc.
const globals = {
    ConnectionString: {
        MongoDB: process.env.CONNECTION_STRING_MONGODB,
    }
}
// export the configuration object
module.exports = globals;