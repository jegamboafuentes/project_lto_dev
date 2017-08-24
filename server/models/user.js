var mongoose = require("mongoose"),
 Schema = mongoose.Schema,
 objectId = mongoose.Schema.ObjectId;
 
var userSchema = new Schema({
 _id: { type: objectId, auto: true },
 firstName: { type: String, required: true },
 lastName: { type: String, required: true },
 phoneNumber: { type: String, required: true },
 email: { type: String, required: true },
 address1: { type: String, required: true },
 address2: { type: String, required: true },
 city: { type: String, required: true },
 state: { type: String, required: true },
 zip:{ type: String, required: true },
 uRegisterDate: { type: String, required: false }
}, {
 versionKey: false
});
 
var user = mongoose.model('users', userSchema); //Database name + Docuement
 
module.exports = user; 