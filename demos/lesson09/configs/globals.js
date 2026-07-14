// Global Configuration file so that I don't need to import dotenv in every file
// Load all environment variables from the .env file into process.env
require('dotenv').config();

const configurations = {
    ConnectionStrings: {
        MongoDB: process.env.CONN_STR_MONGODB
    },
    Authentication: {
        GitHub: {
            ClientID: process.env.GITHUB_CLIENT_ID,
            ClientSecret: process.env.GITHUB_CLIENT_SECRET,
            CallbackURL: process.env.GITHUB_CALLBACK_URL
        }
    }
}

module.exports = configurations;