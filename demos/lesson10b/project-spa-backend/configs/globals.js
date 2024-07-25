// initialize .env
require("dotenv").config();
// Global configuration object that will contain app level variables such as:
// client secrets, API keys, database connection strings, etc.
const globals = {
    ConnectionString: {
        MongoDB: process.env.CONNECTION_STRING_MONGODB,
    },
    Authentication: {
        GitHub: {
          ClientId: process.env.GITHUB_CLIENT_ID,
          ClientSecret: process.env.GITHUB_CLIENT_SECRET,
          CallbackUrl: process.env.GITHUB_CALLBACK_URL
        },
      },
}
// export the configuration object
module.exports = globals;