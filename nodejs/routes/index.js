const express = require("express");
const board = require("./board");
const user = require("./user");

const router = express.Router();

router.get("/", (req, res) => {
    res.render("main");
});

router.use("/board", board);
router.use("/user", user);

module.exports = router;
