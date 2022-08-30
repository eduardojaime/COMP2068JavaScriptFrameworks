// Create a model that represents a user in my db
const mongoose = require('mongoose');
// But how do I implement hashing functionality to protect passwords?
// How do I implement handling authentication attempts
// Use out of the box functionality from PLM package
const plm = require('passport-local-mongoose');

var schemaDefinition = {
    username: { type: String },
    password: { type: String }
}

var schemaObject = new mongoose.Schema(schemaDefinition);
// inject PLM functionality into schema object
// this extends the basic model functionality
schemaObject.plugin(plm);

module.exports = new mongoose.model('User', schemaObject);