require("dotenv").config();
// Global configurations object contains Application Level variables such as:
// client secrets, passwords, connection strings, and misc flags
const configurations = {
    ConnectionStrings: {
        MongoDB: process.env.CONNECTION_STRING_MONGODB
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