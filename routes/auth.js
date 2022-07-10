const router = require("express").Router();
const User = require("../models/Users");

// REGISTER
router.get("/register", async (req, res) => {
    const user = new User({
        username: "Hà Văn Được",
        email: "havanduoc.dev@gmail.com",
        password: "123456",
    });

    await user.save();
    res.send("OK");
});

module.exports = router;
