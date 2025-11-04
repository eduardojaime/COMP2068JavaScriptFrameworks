// Naming convention for models: use singular form of the represented entity
// Import mongoose
const mongoose = require("mongoose");
// Define data schema (JSON)
const dataSchemaObj = {
  name: { type: String, required: true },
  dueDate: { type: Date },
  course: { type: String, required: true },
  status: { type: String, default: "TO DO" },
};
// Create mongoose schema
const projectsSchema = mongoose.Schema(dataSchemaObj);
// Create and import mongoose model
module.exports = mongoose.model("Project", projectsSchema);