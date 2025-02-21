// Regular mongoose model, we'll enhance it with a plugin to offer authentication functionality
const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

const dataSchemaObject = {
    username: { type: String },
    password: { type: String },
};

const mongooseSchema = mongoose.Schema(dataSchemaObject);
// Enhance the model with a plugin
// configure basic strategy, password hashing, serialization, deserialization
mongooseSchema.plugin(plm);

module.exports = mongoose.model("User", mongooseSchema);