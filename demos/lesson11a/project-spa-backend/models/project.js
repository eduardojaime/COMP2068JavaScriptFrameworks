// data model names are singular
// Import mongoose
const mongoose = require("mongoose");
// Define data schema object (JSON)
const dataSchemaObject = {
    name: {
        type: String,
        required: true,
    },
    dueDate: { type: Date },
    course: { type: String, required: true },
    status: { type: String, default: "TO DO" },
} 
// Create a mongoose schema object
const mongooseSchema = mongoose.Schema(dataSchemaObject);
// Create and export a mongoose model object
module.exports = mongoose.model("Project", mongooseSchema);