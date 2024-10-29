// import dotenv to read .env file
require("dotenv").config();
// this is my configuration file
const configurations = {
    ConnectionStrings: {
        MongoDB: process.env.CONNECTION_STRING_MONGODB
    }
}
// export so that object is available to other files
module.exports = configurations;