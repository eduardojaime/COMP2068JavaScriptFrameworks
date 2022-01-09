// Step 1 Import mongoose
const mongoose = require('mongoose');

// Step 2 Schema Definition > define how the data should look like
const schemaDefinition = {
    name: {
        type: String,
        required: true
    }
};

// Step 3 Use the definition to create mongo schema
var coursesSchema = new mongoose.Schema(schemaDefinition);

// Step 4 Create the model and make it available to the app
module.exports = mongoose.model('Course', coursesSchema);