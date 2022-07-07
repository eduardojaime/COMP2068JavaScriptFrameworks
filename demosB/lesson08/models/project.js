// naming convention > models are singular, routers are plural
// model is an object that represents my data and interacts with the db

// Import mongoose
const mongoose = require('mongoose');
// Create schema definition using mapping notation
// Define what you want your data to look like
const projectsSchemaDefinition = {
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
// Create a mongoose schema using the definition object
const projectsSchema = new mongoose.Schema(projectsSchemaDefinition);
// Create a mongoose model using the mongoose schema
module.exports = mongoose.model('Project', projectsSchema);