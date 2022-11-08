// similar to other models
const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

var schemaDefinition = {
    username: String,
    password: String
}

var schemaObj = new mongoose.Schema(schemaDefinition);

// we need a way to encrypt password, and to validate password
// option 1 > code from scratch
// option 2 > use 'plugins'
schemaObj.plugin(plm);

module.exports = new mongoose.model('User', schemaObj);