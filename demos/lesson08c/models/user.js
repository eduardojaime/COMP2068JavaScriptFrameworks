const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");
const dataSchemaObj = {
    username: { type: String },
    password: { type: String }, // Never store passwords as plain text, these must be encrypted,
    oauthId: { type: String },
    oauthProvider: { type: String },
    created: { type: Date }
}
const usersSchema = new mongoose.Schema(dataSchemaObj);
// what about create strategy? serialize? deserialize? password encryption? Use PLM plugin
usersSchema.plugin(plm);
module.exports = mongoose.model("User", usersSchema);