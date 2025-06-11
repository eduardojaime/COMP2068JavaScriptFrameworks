// This is a global configuration object, I'll use it to store global settings for the application
// Including environment variables
// It can be imported from any file in the application
// Initialize dotenv
require("dotenv").config();
// Create configurations object
const configurations = {
  ConnectionStrings: {
    MongoDB: process.env.CONNECTION_STRING_MONGODB,
  },
};
// Export configurations object
module.exports = configurations;