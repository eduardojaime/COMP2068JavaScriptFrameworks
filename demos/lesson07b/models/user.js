// This model represents a user in the database
// It's a simple model enhanced with plugins to provide authentication-related features
// such as Password Encryption, Deserialization/Serialization, Initialize Strategy, etc.
const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");
const dataSchemaObject = { 
    username: { type: String, required: true, unique: true },
    password: { type: String }, // don't make this required, we want to encrypt it
};
const mongooseSchema = mongoose.Schema(dataSchemaObject);
// Inject the passport-local-mongoose plugin into our Schema
mongooseSchema.plugin(plm);
module.exports = mongoose.model("User", mongooseSchema);