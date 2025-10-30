// This will be a regular Mongoose model, but will also handle:
// password encryption, user serialization, deserialization and initializing the strategy
// Import mongoose
const mongoose = require("mongoose");
// Import passport-local-mongoose to provide additional methods: register, authenticate, serialize, deserialize
const plm = require("passport-local-mongoose");
// Create a mongoose schema object
const mongooseSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String },
  // add fields to store OAuth provider data
  oauthId: { type: String }, // id to identify this user in the OAuth provider system
  oauthProvider: { type: String }, // name of the OAuth provider (e.g., 'GitHub')
  created: { type: Date, default: Date.now }
});
// Extend with plugin (the user model will have the additional methods out of the box)
mongooseSchema.plugin(plm);
// Create and export the model
module.exports = mongoose.model("User", mongooseSchema);
