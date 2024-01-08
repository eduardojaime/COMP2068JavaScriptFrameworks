const mongoose = require('mongoose');
// Take the out of the box functionality from the plm package to extend the user model
const plm = require('passport-local-mongoose');

var dataSchemaObj = {
    username: String,
    password: String
}
var userSchema = new mongoose.Schema(dataSchemaObj);
// Use passport-local-mongoose to indicate this is a special authentication model
// plugin() adds plm functionality to our model
// i.e. hashing/salting password, and handling authentication attempts
userSchema.plugin(plm);
// export the enhanced model
module.exports = new mongoose.model('User', userSchema);