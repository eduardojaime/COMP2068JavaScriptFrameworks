// This is a mongoose model for the User collection in MongoDB
const mongoose = require('mongoose');
// Enhance this model with a plugin to handle:
// password hashing and salting, and password validation
// user serialization and deserialization for passport
// Compatibility fix for latest versions of mongoose and passport-local-mongoose
const plmModule = require('passport-local-mongoose');
const plm = plmModule.default || plmModule;

const schemaObject = {
    username: String,
    password: String, // this one will be hashed and salted before saving to the database
    // additional fields to handle OAuth authentication strategies
    oauthId: String, // identifies user in the third-party OAuth provider's system > maps to username or handle
    oauthProvider: String, // identifies the third-party OAuth provider (e.g., GitHub, Google, etc.), we'll hardcode this
    createdAt: { type: Date, default: Date.now },
};

const mongooseSchema = new mongoose.Schema(schemaObject);
// plugins can be injected into the schema to enhance its functionality
mongooseSchema.plugin(plm);

module.exports = mongoose.model("User", mongooseSchema);