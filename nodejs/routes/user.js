const express = require("express");
const { login, join } = require("../controllers/user");
const router = express.Router();

router.get("/login", (req, res) => {
    res.render("login");
});

router.post("/login", login);

router.get("/join", (req, res) => {
    res.render("join");
});

router.post("/join", join);

module.exports = router;
