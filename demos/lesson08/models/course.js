const mongoose = require("mongoose");
const schemaObj = {
    code: { type: String, required: true }, // COMP2068
    name: { type: String, required: true } // JS Frameworks
}
const mongooseSchema = mongoose.Schema(schemaObj);
module.exports = mongoose.model("Course", mongooseSchema);