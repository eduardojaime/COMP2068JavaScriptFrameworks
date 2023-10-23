// Model represents courses in my database
const mongoose = require("mongoose");
const dataSchemaObj = {
    name: { type: String, required: true },
    code: { type: String, required: true }
}
const coursesSchema = new mongoose.Schema(dataSchemaObj);
module.exports = mongoose.model("Course", coursesSchema);