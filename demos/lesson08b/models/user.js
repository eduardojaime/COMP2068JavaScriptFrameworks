// mongoose model with passport related features
// import mongoose
const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");
// create schema obj
const schemaObj = {
  username: { type: String, required: true },
  password: { type: String }, // Security Rule : Avoid storing plain text passwords!
  oauthId: { type: String },
  oauthProvider: { type: String },
  created: { type: Date },
};
// create mongoose schema
const mongooseSchema = new mongoose.Schema(schemaObj);
// Add plugins to the mongoose schema to enhance its features
mongooseSchema.plugin(plm); // inject functionality contained in plm
// create and export mongoose model
module.exports = new mongoose.model("User", mongooseSchema);
