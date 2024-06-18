// this is a simple model, extended with a plugin to add: 
// password encryption, user serialization/de-serialization, and password validation
const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");
const dataSchemaObject = {
    username: {
        type: String,
        required: true,
    },
    password: { // Never store passwords as plain text
        type: String,
        required: false, // to avoid issues when creating a new user
    },
};
const mongooseSchema = mongoose.Schema(dataSchemaObject);
// Add Passport Local Mongoose plugin to User Schema
mongooseSchema.plugin(plm);
module.exports = mongoose.model("User", mongooseSchema);