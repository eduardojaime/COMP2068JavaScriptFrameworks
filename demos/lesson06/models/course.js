const mongoose = require('mongoose');

const schemaDefinition = {
    name: {
        type: String,
        require: true
    }
};

var mongooseSchema = new mongoose.Schema(schemaDefinition);
module.exports = mongoose.model('Course', mongooseSchema);