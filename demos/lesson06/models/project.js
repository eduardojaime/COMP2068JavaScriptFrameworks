// naming convention for models > singular
// Import mongoose
const mongoose = require('mongoose');
// Define data schema in JSON format: data properties and data types
const dataSchemaObject = { 
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
        default: 'TO DO' // default value, if not provided when adding a new project
    }
}
// Create mongoose schema
const mongooseSchema = mongoose.Schema(dataSchemaObject);
// Create and export mongoose model
module.exports = mongoose.model("Project", mongooseSchema);