const mongoose = require("mongoose");
const dataSchemaObject = {
  code: {
    type: String,
    required: true,
  }, // COMP2068
  name: {
    type: String,
    required: true,
  }, // JavaScript Frameworks
};
const mongooseSchema = mongoose.Schema(dataSchemaObject);
module.exports = mongoose.model("Course", mongooseSchema);