// Import mongoose
const mongoose = require('mongoose');
// Create a schema definition object using mapping notation
// Basic definition
// const schemaDefinition = {
//     name: String,
//     dueDate: Date,
//     course: String,
//     status: String
// }

// Expanded definition
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
// Create a new mongoose schema using the definition object
var mongooseSchema = new mongoose.Schema(schemaDefinition);
// Create a new mongoose model using the mongoose schema and export the new model
module.exports = mongoose.model('Project', mongooseSchema);