// Represents users in my database
const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

const userSchemaDefinition = {
    username: { type: String },
    password: { type: String }, // Never store passwords as plain text, these must be encrypted,
    oauthId: { type: String },
    oauthProvider: { type: String },
    created: { type: Date }
}

const userSchema = new mongoose.Schema(userSchemaDefinition);
// Inject PLM module to enhance this model with
// Password Encryption, Serialization/Desearialization, CreateStrategy()
userSchema.plugin(plm);

module.exports = new mongoose.model("User", userSchema);