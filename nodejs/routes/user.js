const express = require("express");
const user = require("../controllers/user");
const router = express.Router();

router.get("/login", (req, res) => {
    res.render("login");
});

router.post("/login", user.login);

router.get("/join", (req, res) => {
    res.render("join");
});

router.post("/join", user.join);

module.exports = router;