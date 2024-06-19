// this represents a course in my DB
const mongoose = require("mongoose");
const dataSchemaObject = {
    name: { type: String, required: true }, // JavaScript Frameworks
    code: { type: String, required: true }, // COMP2068
}
const mongooseSchema = mongoose.Schema(dataSchemaObject);
module.exports = mongoose.model("Course", mongooseSchema);