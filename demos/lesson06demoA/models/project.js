// Import mongoose
const mongoose = require('mongoose');
// Create a schema definition object
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
};
// Use the schema definition object to create a mongodb schema
var projectSchema = new mongoose.Schema(schemaDefinition);
// Use the mongodb schema to create a model and export it
module.exports = mongoose.model('Project', projectSchema);