// This is a mongoose model for the User collection in MongoDB
const mongoose = require('mongoose');
// Enhance this model with a plugin to handle:
// password hashing and salting, and password validation
// user serialization and deserialization for passport
const plm = require('passport-local-mongoose');

const schemaObject = {
    username: String,
    password: String, // this one will be hashed and salted before saving to the database
};

const mongooseSchema = new mongoose.Schema(schemaObject);
// plugins can be injected into the schema to enhance its functionality
mongooseSchema.plugin(plm);

module.exports = mongoose.model("User", mongooseSchema);