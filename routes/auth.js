const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("this is route auth");
});

module.exports = router;