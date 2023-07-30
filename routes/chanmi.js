var express = require("express");
var router = express.Router();

router.get("/food", function (req, res, next) {
    res.send("hi!!! this is food");
});

module.exports = router;
