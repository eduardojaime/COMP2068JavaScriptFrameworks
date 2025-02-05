// This is my application-level configuration object
// Require and initialize dotenv
require("dotenv").config();
// create a configuration object
const configurations = {
    ConnectionStrings: {
        MongoDB: process.env.CONNECTION_STRING_MONGODB
    }
}
// export the configuration object
module.exports = configurations;