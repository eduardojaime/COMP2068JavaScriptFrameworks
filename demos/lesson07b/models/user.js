// This is a regular Mongoose model that represents users in my database
// It will be enhanced with a plugin to add authentication functionality
// such as password encryption, basic strategy initialization, serialization/deserialization, etc.
const mongoose = require("mongoose");
// Import passport-local-mongoose
const plm = require("passport-local-mongoose");

// Define the schema for the User model
const dataSchemaObject = {
  username: { type: String },
  password: { type: String },
};

// Create the mongoose schema
const mongooseSchema = new mongoose.Schema(dataSchemaObject);
// Inject the passport-local-mongoose plugin
mongooseSchema.plugin(plm);
// Create and export the mongoose model
module.exports = mongoose.model("User", mongooseSchema);
