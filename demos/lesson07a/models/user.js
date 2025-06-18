// This is a Mongoose model for the User collection
// We'll enhance it with a plugin to get the out-of-the-box functionality for 
// password hashing, serialization and deserialization, strategy initialization, etc.
const plm = require("passport-local-mongoose");
const mongoose = require("mongoose");
const dataSchemaObject = {
    username: { type: String },
    password: { type: String }, // secure coding practices should be followed > never store plain text passwords
};
const schema = mongoose.Schema(dataSchemaObject);
schema.plugin(plm); // add passport-local-mongoose plugin to the schema definition
module.exports = mongoose.model("User", schema);