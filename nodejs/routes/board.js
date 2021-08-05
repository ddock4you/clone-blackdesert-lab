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

router.get("/news-write", (req, res) => {
    res.render("board/news-write");
});

router.post("/news-write", (req, res) => {
    console.log("여기까지 왔음");
    console.log(req.body);
    console.log(req.files);

    res.status(200).json({ msg: "hi" });
});

module.exports = router;
