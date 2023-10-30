const mongoose = require("mongoose");
// import plm module to extend this model
const plm = require("passport-local-mongoose");
const userSchemaDefinition = {
    username: { type: String },
    password: { type: String } // never store passwords as plain text
}
const userSchema = new mongoose.Schema(userSchemaDefinition);
// inject plm features (serialization, deserialization, password encryption) as a plugin
userSchema.plugin(plm);
module.exports = new mongoose.model("User", userSchema);