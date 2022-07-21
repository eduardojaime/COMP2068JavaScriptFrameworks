// Import mongoose
const mongoose = require('mongoose');

// Create schema definition object using mapping notation
const projectsSchemaDefinition = {
    // add each element and its properties
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

// Create new mongoose schema using the definition object
var projectsSchema = new mongoose.Schema(projectsSchemaDefinition);
// Create new mongoose model using the schema object and
// Import new model > provide name and schema
module.exports = mongoose.model('Project', projectsSchema);;
// alternative > module.exports = mongoose.model('Project', projectsSchema);