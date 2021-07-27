const express = require("express");
const board = require("./board");
const user = require("./user");
const auth = require("../middlewares/auth");
const router = express.Router();

router.get("/", (req, res) => {
    // console.log(req.user);
    res.render("main", { user: req.user });
});

// 게시판
router.use("/board", board);
// 유저관련
router.use("/user", user);

module.exports = router;
