const mongoose = require('mongoose');

// but how do I handle encrypting/validation passwords?
// how do I handle serializing/deserializing this object to/from session store?
const plm = require('passport-local-mongoose');

const schemaDefinition = {
    username: { type: String },
    password: { type: String },
    oauthId: { type: String },
    oauthProvider: { type: String },
    created: { type: Date }
}

const mongooseSchema = new mongoose.Schema(schemaDefinition);

// once I have the schema object, I can expand its functionality
mongooseSchema.plugin(plm);

module.exports = new mongoose.model('User', mongooseSchema);