var express = require("express");
var router = express.Router();

router.get("/cat", function (req, res, next) {
    res.send("cat meow");
});

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
});

module.exports = router;
