const mongoose = require('mongoose');
const schemaDefinitionObj = {
    name: {
        type: String,
        required: true
    }
}
var mongooseSchema = new mongoose.Schema(schemaDefinitionObj);
module.exports = mongoose.model("Course", mongooseSchema);