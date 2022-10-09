// naming convention > models are singular, routers are plural
// Import mongoose
const mongoose = require('mongoose');
// Create schema definition object
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
// Create mongoose schema using the def obj
var mongooseSchema = new mongoose.Schema(schemaDefinition);
// Create and export a mongoose Model
module.exports = mongoose.model('Project', mongooseSchema);