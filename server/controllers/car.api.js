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
            res.send("error");
            return;
        }
        res.send("created");
    });
}).put("/:id", function (req, res) {
    var id = req.params.id;
    var obj = req.body;
    car.findByIdAndUpdate(id, {
        idUser: obj.idUser
        , cBrand: obj.cBrand
        , cModel: obj.cModel
        , cYear: obj.cYear
        , cMilagePerYear: obj.cMilagePerYear
        , cMilageNow: obj.cMilageNow
        , cLeaseTermn: obj.cLeaseTermn
        , cMonthlyPayment: obj.cMonthlyPayment
        , cYearAndMonthGotIt: obj.cYearAndMonthGotIt
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