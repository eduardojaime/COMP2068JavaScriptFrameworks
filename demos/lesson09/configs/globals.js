// setup dotenv
require("dotenv").config();
// Global configuration values that apply across my application
const configurations = {
    ConnectionStrings: {
        MongoDB: process.env.CONNECTION_STRING_MONGODB // associate secret value from .env
    },
    Authentication: {
        GitHub: {
            ClientId: process.env.GITHUB_CLIENT_ID,
            ClientSecret: process.env.GITHUB_CLIENT_SECRET,
            CallbackUrl: process.env.GITHUB_CLIENT_CALLBACK_URL
        }
    }
}
// export the configurations object to make it available across your app
module.exports = configurations; 