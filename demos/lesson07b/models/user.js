// This is a mongoose model which represents users in my DB
const mongoose = require("mongoose");
// We'll use the out-of-the-box functionality in PLM to extend the model
const plm = require("passport-local-mongoose");

const schemaObj = {
    username: { type: String },
    password: { type: String }, // never store passwords in plain text
}
const mongooseSchema = new mongoose.Schema(schemaObj);
// Inject passport-local-mongoose into the User model
// to handle password encryption, serialization, and deserialization of the user
mongooseSchema.plugin(plm);
module.exports = mongoose.model("User", mongooseSchema);