// Model represents a user in the database
// A user has a username, password
const mongoose = require("mongoose");
// Import passport-local-mongoose to handle hashing and salting of passwords
// as well as other user authentication features such as user serialization/deserialization
const plm = require("passport-local-mongoose");
// Define data schema in JSON
const dataSchemaObj = {
  username: { type: String, require: true },
  password: { type: String, require: true }, // never store plain text passwords
};
// Create a mongoose schema
const mongooseSchema = mongoose.Schema(dataSchemaObj);
// Plugins are a way to add additional functionality to a Mongoose schema
// Here we are adding passport-local-mongoose to the schema
mongooseSchema.plugin(plm);
// Create and export a mongoose model
module.exports = mongoose.model("User", mongooseSchema);