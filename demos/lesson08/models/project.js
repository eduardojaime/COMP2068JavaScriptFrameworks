// This is a model and represents a Project document in my database
// Import mongoose
const mongoose = require('mongoose');
// Create a schema definition object using mapping notation
const schemaDefinitionObj = { // what data does a project document contain?
    name: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date
    },
    course: {
        type: String,
        require: true
    },
    status: {
        type: String,
        default: 'TO DO'
    }
}
// Create a mongoose schema using the def object
var mongooseSchema = new mongoose.Schema(schemaDefinitionObj);
// Create and import a new mongoose model
module.exports = mongoose.model('Project', mongooseSchema);