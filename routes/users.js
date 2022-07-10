const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("this is route user");
});

module.exports = router;
