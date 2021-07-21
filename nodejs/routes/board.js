const express = require("express");
const auth = require("../middlewares/auth");

const router = express.Router();

router.get("/list", auth.isLogin, (req, res) => {
    res.render("board/list");
});

router.get("/view", (req, res) => {
    res.render("board/view");
});

router.get("/wirte", (req, res) => {
    res.render("board/write");
});

module.exports = router;
