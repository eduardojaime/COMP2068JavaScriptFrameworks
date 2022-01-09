const mongoose = require('mongoose');

const coursesSchemaDefinition = {
    name: {
        type: String,
        required: true
    }
};

var coursesSchema = new mongoose.Schema(coursesSchemaDefinition);
module.exports = mongoose.model('Course', coursesSchema);