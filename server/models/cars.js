var mongoose = require("mongoose"),
 Schema = mongoose.Schema,
 objectId = mongoose.Schema.ObjectId;
 
var carSchema = new Schema({
 _id: { type: objectId, auto: true },
 idUser: { type: String, required: true },
 cBrand: { type: String, required: true },
 cModel: { type: String, required: true },
 cYear: { type: String, required: true },
 cMilagePerYear: { type: String, required: true },
 cMilageNow : { type: String, required: true }, 
 cLeaseTermn: { type: String, required: true },
 cMonthlyPayment: { type: String, required: true },
 cYearAndMonthGotIt: { type: String, required: true }
}, {
 versionKey: false
});
 
var user = mongoose.model('cars', carSchema); //Database name + Docuement
 
module.exports = user;