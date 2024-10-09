// This is a model that represents a Project in the database
// Model names are in singular form
// Import mongoose
const mongoose = require("mongoose");
// Create schema object
const schemaObj = {
    name: { type: String, required: true },
    dueDate: { type: Date },
    course: { type: String, required: true },
    status: { type: String, default: "TO DO" }
}
// Create mongoose schema
const mongooseSchema = new mongoose.Schema(schemaObj);
// Create and export mongoose model
module.exports = mongoose.model("Project", mongooseSchema);