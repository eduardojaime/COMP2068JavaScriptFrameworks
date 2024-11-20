// import dotenv to read .env file
require("dotenv").config();
// this is my configuration file
const configurations = {
    ConnectionStrings: {
        MongoDB: process.env.CONNECTION_STRING_MONGODB
    },
    Authentication: {
        GitHub: {
            ClientID: process.env.GITHUB_CLIENT_ID,
            ClientSecret: process.env.GITHUB_CLIENT_SECRET
        }
    }
}
// export so that object is available to other files
module.exports = configurations;