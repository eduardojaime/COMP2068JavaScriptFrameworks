// require and initialize dotenv
require("dotenv").config();
// create configuration object
const configurations = {
    ConnectionStrings: {
        MongoDB: process.env.CONNECTION_STRING_MONGODB
    }
}
// export configuration object (make it available for use in app.js)
module.exports = configurations;