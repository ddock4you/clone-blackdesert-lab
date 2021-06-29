const express = require("express");
const mysql = require("mysql");
const dbconfig = require("../config/database");
const connection = mysql.createConnection(dbconfig);

const router = express.Router();

router.get("/login", (req, res) => {
    res.render("login");
});
router.get("/join", (req, res) => {
    res.render("join");
});
router.post("/join", async (req, res) => {
    const { email, password, name, birth } = req.body;
    // connection.query("SELECT COUNT(*) FROM users WHERE = ?", [email], (err) => {
    //     if (err) throw err;
    // });

    connection.query(
        "INSERT INTO users (email, password, name, birth) VALUES (?, ?, ?, ?)",
        [email, password, name, birth],
        (err) => {
            if (err) throw err;
            res.status(200);
            res.json({ aaa: "abcde" });
        }
    );
});

module.exports = router;
