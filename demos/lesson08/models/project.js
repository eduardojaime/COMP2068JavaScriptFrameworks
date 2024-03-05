// Naming convention > models are singular
// Import Mongoose
const mongoose = require("mongoose");
// Define data schema in JSON
const dataSchemaObj = {
    name: { type: String, require: true },
    dueDate: { type: Date },
    course: { type: String, require: true },
    status: { type: String, default: "TO DO" }
}
// Create a mongoose schema
const mongooseSchema = mongoose.Schema(dataSchemaObj);
// Create and export a mongoose model
module.exports = mongoose.model("Project", mongooseSchema);