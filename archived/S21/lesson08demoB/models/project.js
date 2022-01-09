// Import mongoose
const mongoose = require('mongoose');
// create a schema definition object using the mapping notation
const schemaDefinition = {
    name: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date
    },
    course: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'TO DO'
    }
}
// create a new mongoose schema using the definition object
var projectsSchema = new mongoose.Schema(schemaDefinition);
// create a new mongoose model using the provided schema object and export
module.exports = mongoose.model('Project', projectsSchema);
