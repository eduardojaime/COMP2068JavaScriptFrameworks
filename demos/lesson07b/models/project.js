// Model file names are singular
// Import mongoose, then the schema class and model
const mongoose = require("mongoose");
const { Schema, model } = mongoose;
// define the data schema object
const schemaObject = Schema({
    name: { type: String, required: true },
    dueDate: { type: Date }, // required is false by default
    course: { type: String, required: true },
    status: { type: String, required: true, default: "TO DO" }
});

// create and export the model
module.exports = model("Project", schemaObject);