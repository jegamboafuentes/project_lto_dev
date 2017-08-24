var express = require("express")
    , router = express.Router()
    , car = require("../models/cars.js");
router.get("/", function (req, res) {
    car.find({}, function (err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data);
    });
}).get("/:id", function (req, res) {
    var id = req.params.id;
    car.find({
        _id: id
    }, function (err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data[0]);
    });
}).get("/carbyuser/:idUser", function (req, res) {
    var id = req.params.idUser;
    car.find({
        idUser: id
    }, function (err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data);
    });
}).post("/", function (req, res) {
    var obj = req.body;
    var model = new car(obj);
    model.save(function (err) {
        if (err) {
            res.send("error"+err);
            return;
        }
        res.send("created");
    });
}).put("/:id", function (req, res) {
    var id = req.params.id;
    var obj = req.body;
    car.findByIdAndUpdate(id, {
        idUser: obj.idUser
        
        , cYear: obj.cYear
        , cMake: obj.cMake
        , cModel: obj.cModel
        , cVinNumber: obj.cVinNumber
        , idLeaseCompany: obj.idLeaseCompany
        , cMilesPerYear: obj.cMilesPerYear
        , cMilesNow: obj.cMilesNow
        , cMilesRemaining: obj.cMilesRemaining
        , cTotalLeaseTerm: obj.cTotalLeaseTerm
        , cMonthlyPayment: obj.cMonthlyPayment
        , cDownPayment: obj.cDownPayment
        , cDateGetIt: obj.cDateGetIt
        , cDateEndIt: obj.cDateEndIt
        , cRegisterDate: obj.cRegisterDate
    }, function (err) {
        if (err) {
            res.send("error");
            return;
        }
        res.send("updated");
    });
}).delete("/:id", function (req, res) {
    var id = req.params.id;
    car.findByIdAndRemove(id, function (err) {
        if (err) {
            res.send("error");
            return;
        }
        res.send("deleted");
    });
});
module.exports = router;