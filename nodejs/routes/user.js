const express = require("express");

const router = express.Router();

router.get("/login", (req, res) => {
    res.render("login");
});
router.get("/join", (req, res) => {
    res.render("join");
});
router.post("/join", (req, res) => {
    console.log(req.body);
});

module.exports = router;
