const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");
const dataSchemaObj = {
    username: { type: String },
    password: { type: String } // Always encrypt password, never save as plain text
}
const usersSchema = new mongoose.Schema(dataSchemaObj);
// what about create strategy? serialize? deserialize? password encryption? Use PLM plugin
usersSchema.plugin(plm);
module.exports = mongoose.model("User", usersSchema);