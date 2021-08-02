const express = require("express");
const router = express.Router();

router.get("/list", (req, res) => {
    res.render("board/list");
});

router.get("/view", (req, res) => {
    res.render("board/view");
});

router.get("/wirte", (req, res) => {
    res.render("board/write");
});

router.get("/news_write", (req, res) => {
    res.render("board/news_write");
});

module.exports = router;
