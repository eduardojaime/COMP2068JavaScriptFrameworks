// simple user model
const mongoose = require("mongoose");
// extend with plm for password encryption, strategy creation, serialization, deserialization, etc...
const plm = require("passport-local-mongoose");

const dataSchemaObj = { 
    username: { type: String },
    password: { type: String }, // never store plain text passwords
    oauthId: { type: String },
    oauthProvider: { type: String },
    created: { type: Date, default: Date.now }
}

const userSchema = mongoose.Schema(dataSchemaObj);

// inject out-of-the-box functionality from plm
// plugins allow you to extend mongoose schemas and inject additional properties and methods
userSchema.plugin(plm);

module.exports = mongoose.model("User", userSchema);