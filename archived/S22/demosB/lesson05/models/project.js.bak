// naming convention is routes are plural, models are singular
// Import mongoose
const mongoose = require('mongoose');
// Create schema definition using mapping notation
// Define what you want your data to look like
const projectsSchemaDefinition = {
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
// Create a mongoose schema using the definition object
const projectsSchema = new mongoose.Schema(projectsSchemaDefinition);
// Create a mongoose model using the mongoose schema
module.exports = mongoose.model('Project', projectsSchema);