// naming convention: singular for model names, plural for router names
// this file contains a schema definition object that will be mapped to a mongodb document
// using mongoose

// Import mongoose
const mongoose = require("mongoose");
// Create a schema definition object using mapping notation
const schemaDefinitionObj = {
    // how does the data look like?
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
        default: "TO DO" // to later update to IN PROGRESS or DONE
    },
    // In-class question: Storing photos or images or any other static file, best practices
    // first upload, then retrieve URL http://localhost:3000/files/images/photo.png
    // imgUrl: { type: String }
}
// Create a new mongoose schema
const mongooseSchema = new mongoose.Schema(schemaDefinitionObj);
// Create and export a new mongoose model
module.exports = mongoose.model("Project", mongooseSchema);