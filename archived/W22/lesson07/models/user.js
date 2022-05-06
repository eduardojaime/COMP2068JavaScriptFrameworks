const mongoose = require('mongoose');

// Import PLM module to use the out-of-the-box passport functionality
const plm = require('passport-local-mongoose');

var schemaDefinition = {
    username: String,
    password: String
}

var userSchema = new mongoose.Schema(schemaDefinition);

// Plug PLM in to indicate that this is a special authentication model
// plugin() add plm functionality to our model
// hashing/salting password, and handling authentication attempts
userSchema.plugin(plm);

module.exports = new mongoose.model('User', userSchema);

// so far so good, but this is just a DB model and passport can't use it yet....