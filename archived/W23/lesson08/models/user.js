// This is a model and represents a User document in my database
// Import mongoose
const mongoose = require('mongoose');
// How to inject authentication related features? passport-local-mongoose or plm
const plm = require('passport-local-mongoose');
// Create a schema definition object using mapping notation
const schemaDefinitionObj = {
   username: { type: String },
   password: { type: String },
   oauthId: { type: String }, // used for storing third party id
   oauthProvider: { type: String }, // user to specify where they are coming from
   created: { type: Date }
}
// Create a mongoose schema using the def object
var mongooseSchema = new mongoose.Schema(schemaDefinitionObj);
// use plugins to extend your model
mongooseSchema.plugin(plm); // adds capabilities to hash password and handle authentication/registration
// Create and export a new mongoose model
module.exports = mongoose.model('User', mongooseSchema);