const mongoose = require("mongoose");
// import plm module to extend this model
const plm = require("passport-local-mongoose");
const userSchemaDefinition = {
    username: { type: String },
    password: { type: String }, // never store passwords as plain text
    // add fields to handle oauth authenticated users
    oauthId: { type: String }, // id value to identify this user in the third-party system
    oauthProvider: { type: String }, // what auth provider was used? Github, google, etc.
    created: { type: Date }, // keeps track of when user was created
}
const userSchema = new mongoose.Schema(userSchemaDefinition);
// inject plm features (serialization, deserialization, password encryption) as a plugin
userSchema.plugin(plm);
module.exports = new mongoose.model("User", userSchema);