// Model files are singular
// Here we define what a Project document looks like in the DB
// Import mongoose
const mongoose = require('mongoose');
// Create a mongoose schema object
const mongooseSchema = mongoose.Schema({
    name: { type: String, required: true },
    dueDate: { type: Date },
    course: { type: String, required: true },
    status: { type: String, enum: ["TODO", "IN-PROGRESS", "DONE"], default: "TODO" },
});
// Create and export the model
module.exports = mongoose.model("Project", mongooseSchema);
