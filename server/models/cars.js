var mongoose = require("mongoose"),
 Schema = mongoose.Schema,
 objectId = mongoose.Schema.ObjectId;
 
var carSchema = new Schema({
 _id: { type: objectId, auto: true },
 idUser: { type: String, required: true },
 cYear: { type: String, required: true },
 cMake: { type: String, required: true },
 cModel: { type: String, required: true },
 cVinNumber: { type: String, required: false },
 idLeaseCompany : { type: String, required: true }, 
 cMilesPerYear: { type: String, required: true },
 cMilesNow: { type: String, required: true },
 cMilesRemaining: { type: String, required: false },
 cTotalLeaseTerm: { type: String, required: true },
 cMonthlyPayment: { type: String, required: true },
 cDownPayment: { type: String, required: false },
 cDateGetIt: { type: String, required: true },
 cDateEndIt: { type: String, required: true },
 cRegisterDate: { type: String, required: true } 
}, {
 versionKey: false
});
 
var user = mongoose.model('cars', carSchema); //Database name + Docuement
 
module.exports = user;