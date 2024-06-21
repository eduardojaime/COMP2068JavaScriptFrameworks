// Simple model, extended with passport-local-mongoose to add features:
// password encryption, strategy initialization, serialization, deserialization
const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");
const dataSchemaObject = {
    username: { type: String, required: true },
    password: { type: String }, 
    // password is not required because it will be encrypted
}
const mongooseSchema = mongoose.Schema(dataSchemaObject);
// Plugins extend the schema with additional features
mongooseSchema.plugin(plm);
module.exports = mongoose.model("User", mongooseSchema);