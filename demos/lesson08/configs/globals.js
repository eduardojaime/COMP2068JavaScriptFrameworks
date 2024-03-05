// setup dotenv
require("dotenv").config();
// Global configuration values that apply across my application
const configurations = {
    ConnectionStrings: {
        MongoDB: process.env.CONNECTION_STRING_MONGODB // associate secret value from .env
    }
}
// export the configurations object to make it available across your app
module.exports = configurations; 