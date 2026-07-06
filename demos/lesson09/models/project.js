// Mongoose model that represents a single project entity in the database
// This is the equivalent of a C# class that represents a table in a relational database
// Even though MongoDB is a NoSQL database without fixed schemas, we still define models as a contract between app and db
// Import mongoose
const mongoose = require('mongoose');
// Define the schema object for a project
const schemaObject = {
    name: { type: String, required: true},
    dueDate: { type: Date },
    status: {
        type: String,
        enum: ["TO DO", "IN PROGRESS", "DONE"],
        default: "TO DO"
    }
}
// Create a mongoose schema based on the definition above
const mongooseSchema = new mongoose.Schema(schemaObject);
// Create mongoose model and export
module.exports = mongoose.model("Project", mongooseSchema);