const mongoose = require('mongoose');

const plm = require('passport-local-mongoose');

var userSchemaDefinition = {
    username: String,
    password: String,
    oauthId: String,
    oauthProvider: String,
    created: Date
}

var userSchema = new mongoose.Schema(userSchemaDefinition);

// Use passport-local-mongoose to indicate this is a special authentication model
// plugin() adds plm functionality to our model
// i.e. hashing/salting password, and handling authentication attemps
userSchema.plugin(plm);

module.exports = new mongoose.model('User', userSchema);