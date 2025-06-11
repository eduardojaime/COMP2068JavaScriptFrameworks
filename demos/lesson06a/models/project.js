// Model name is in singular form
// import mongoose
const mongoose = require("mongoose");
// define data schema object in JSON format (what data will look like)
const dataSchemaObject = {
  name: { type: String, required: true },
  dueDate: { type: Date }, // required is false by default, meaning it can be null
  course: { type: String, required: true },
  status: { type: String, default: "TO DO" },
};
// create a mongoose schema
const schema = mongoose.Schema(dataSchemaObject);
// create and import a mongoose model
module.exports = mongoose.model("Project", schema);
