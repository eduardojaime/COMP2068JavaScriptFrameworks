// Regular mongoose model, enhanced with a plugin to enable authentication related functionality
const mongoose = require("mongoose");
// Enhance this model with a plugin to enable: password encryption, strategy creation, deserializeUser, etc.
const plm = require("passport-local-mongoose");

const dataSchemaObject = {
  username: { type: String },
  password: { type: String }, // never store passwords as plain text
};

const mongooseSchema = mongoose.Schema(dataSchemaObject);

// Load the plugin into the mongoose schema before creating the model
mongooseSchema.plugin(plm);

// create and export the mongoose model
module.exports = mongoose.model("User", mongooseSchema);