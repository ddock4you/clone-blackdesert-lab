const express = require("express");
const jwt = require("jsonwebtoken");
const board = require("./board");
const user = require("./user");
const router = express.Router();
require("dotenv").config();

router.use((req, res, next) => {
    try {
        res.locals.userName = null;
        res.locals.userEmail = null;
        const token = req.cookies.user;
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        if (decode) {
            res.locals.userName = decode.name;
            req.user = {
                name: decode.name,
                email: decode.email,
            };
        }
    } catch (err) {
        console.error({ err });
    }
    next();
});

router.get("/", (req, res) => {
    console.log(req.user);
    res.render("main");
});

// 게시판
router.use("/board", board);
// 유저관련
router.use("/user", user);

module.exports = router;
