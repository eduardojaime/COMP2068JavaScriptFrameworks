// Regular mongoose model, we'll enhance with plugins
const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");
const schemaObj = {
    username: { type: String },
    password: { type: String }, // never store passwords in plain text
};
const mongooseSchema = new mongoose.Schema(schemaObj);
// Things we need: encrypt password, serialize/deserialize user, configure local strategy
// Inject these features using a plugin
mongooseSchema.plugin(plm);
module.exports = mongoose.model("User", mongooseSchema);