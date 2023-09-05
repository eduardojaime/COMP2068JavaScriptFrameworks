// import mongoose
const mongoose = require("mongoose");
// import plm
const plm = require("passport-local-mongoose");
// create schema object
const schemaDefinitionObj = {
    username: String,
    password: String // DANGER, DO NOT store passwords as simple text EVER
}
// create mongoose schema
const mongooseSchema = new mongoose.Schema(schemaDefinitionObj);
// in order to handle hashing/salting passwords you can
// 1) write your own custom code here and associate it to the mongoose schema
// OR 2) use built-in functionality from a npm package
mongooseSchema.plugin(plm); // attaching all functionality inside plm to the mongoose schema
// create and import mongoose model
module.exports = new mongoose.model('User', mongooseSchema);