const mongoose = require('mongoose');
// How do I make this a passport model??
// create plm object that includess authentication related functionality
const plm = require('passport-local-mongoose');

var schemaDefinition = {
    username: String,
    password: String
};

var userSchema = new mongoose.Schema(schemaDefinition);

// Inject passport authentication functionality into this model using plugins
// Encrypting Passwords using Salt and Hash
// User Serialize and Deserialize
userSchema.plugin(plm);

module.exports = new mongoose.model('User', userSchema);