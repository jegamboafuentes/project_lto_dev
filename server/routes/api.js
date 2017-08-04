var express = require('express'),
 router = express.Router();
 
//routes for user api
router.use("/user", require("../controllers/user.api"));
//add here other api routes
//routes for cars api 
router.use("/car", require("../controllers/car.api"));
 
module.exports = router;