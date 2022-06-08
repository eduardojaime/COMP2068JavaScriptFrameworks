// naming convention > models are singular, routers are plural
// model is an object that represents my data and interacts with the db

// Import mongoose
const mongoose = require('mongoose');
// Create a schema definition object
const projectSchemaDefinition = {
    name: {
        type: String, // data type string
        required: true
    },
    dueDate: {
        type: Date // data type date
    },
    course: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'TO DO' // all projects added to my db will be in TO DO
    }
}
// Create a new mongoose schema
const projectSchema = new mongoose.Schema(projectSchemaDefinition);
// Create and import the mongoose model
module.exports = mongoose.model('Project', projectSchema);