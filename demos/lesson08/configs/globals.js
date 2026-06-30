// Global Configuration file so that I don't need to import dotenv in every file
// Load all environment variables from the .env file into process.env
require('dotenv').config();

const configurations = {
    ConnectionStrings: {
        MongoDB: process.env.CONN_STR_MONGODB
    }
}

module.exports = configurations;