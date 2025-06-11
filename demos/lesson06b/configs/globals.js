// This is a global configurations object for the application.
// You can add values from the environment variables here
// or even hardcode some values if needed
require("dotenv").config();

const configurations = {
    ConnectionStrings: {
        MongoDB: process.env.CONNECTION_STRING_MONGODB
    }
}

module.exports = configurations;