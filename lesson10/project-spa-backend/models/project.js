// Model files are named in singular form
// This file represents a document in my DB
// Import mongoose
const mongoose = require("mongoose");
// Define schema object
const schemaObj = {
    name: { type: String, required: true },
    dueDate: { type: Date },
    course: { type: String, required: true },
    status: { type: String, default: "TO DO" },
}
// Create mongoose schema
const mongooseSchema = new mongoose.Schema(schemaObj);
// Create and export mongoose model
module.exports = mongoose.model("Project", mongooseSchema);