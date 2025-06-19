// This model represents a user in the system
// It's a simple mongoose model
// but will be extended with out-of-the-box functionality
const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const plm = require("passport-local-mongoose");

const schemaObject = Schema({
    username: { type: String },
    password: { type: String }, // secure coding practice > never store passwords in plain text
});

// Add passport-local-mongoose plugin to the schema to handle: 
// password hashing, serialization/deserialization, initializing user strategy, and more
schemaObject.plugin(plm);

module.exports = model("User", schemaObject);