// Model names are in the singular form as they represent an Entity in the DB
// This is a mongoose model, and gives you access to out-of-the-box functions
// Import mongoose
const mongoose = require("mongoose");
// Create schema object > define your data
// This serves as the contract between app and db
const schemaObj = {
    name: { type: String, required: true },
    dueDate: { type: Date },
    course: { type: String, required: true },
    status: { type: String, default: "TO DO" },
}
// Use schema object to create mongoose schema
const mongooseSchema = new mongoose.Schema(schemaObj);
// Use mongoose schema to create mongoose model
module.exports = mongoose.model("Project", mongooseSchema);