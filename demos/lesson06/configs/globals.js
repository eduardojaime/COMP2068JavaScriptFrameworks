require("dotenv").config();

const configurations = {
    ConnectionStrings: {
        MongoDB: process.env.CONNECTION_STRING_MONGODB
    }
}

module.exports = configurations;