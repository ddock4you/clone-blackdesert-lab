const express = require("express");
const multer = require("multer");
const path = require("path");
const {
    newsList,
    newsWrite,
    getNewsListTotal,
} = require("../controllers/board");
const router = express.Router();
const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "uploads/");
        },
        filename: (req, file, cb) => {
            cb(null, new Date().valueOf() + path.extname(file.originalname));
        },
    }),
});

router.get("/view", (req, res) => {
    res.render("board/view");
});

router.get("/wirte", (req, res) => {
    res.render("board/write");
});

router.get("/list", (req, res) => {
    res.render("board/list");
});

router.get("/get-newslist", newsList);
router.get("/get-boardlist-total", getNewsListTotal);

router.get("/news-write", (req, res) => {
    res.render("board/news-write");
});

router.post("/news-write", upload.single("thumnail"), newsWrite);

module.exports = router;
