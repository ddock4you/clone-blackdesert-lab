const express = require("express");
const mysql = require("mysql");
const dbconfig = require("../config/database");
const bcrypt = require("bcrypt");
const connection = mysql.createConnection(dbconfig);
const saltRounds = 10;

const router = express.Router();

router.get("/login", (req, res) => {
    res.render("login");
});

router.post("/login", (req, res) => {
    const { email, password } = req.body;
    connection.query(
        "SELECT email, password FROM users WHERE email = ?",
        [email],
        (err, data) => {
            if (err) throw err;
            if (!data.length) {
                res.status(404).json({
                    msg: "등록되지 않은 이메일입니다.",
                    isLoggedin: false,
                });
                return;
            }
            const hashPassword = data[0].password;
            bcrypt.compare(password, hashPassword, function (err, result) {
                if (err) throw err;
                if (!result) {
                    res.status(404).json({
                        msg: "비밀번호가 일치하지 않습니다.",
                        isLoggedin: false,
                    });
                    return;
                }
                res.status(200).json({
                    isLoggedin: true,
                });
            });
        }
    );
});

router.get("/join", (req, res) => {
    res.render("join");
});
router.post("/join", async (req, res) => {
    const { email, password, name, birth } = req.body;
    connection.query(
        "SELECT COUNT(*) AS count FROM users WHERE email = ?",
        [email],
        (err, data) => {
            const [{ count }] = data; // data[0].count
            if (err) throw err;
            if (count) {
                res.status(404);
                res.json({
                    msg: "동일한 이메일로 가입되어 있습니다.",
                    isJoin: false,
                });
                return;
            }
            bcrypt.genSalt(saltRounds, (err, salt) => {
                if (err) throw err;
                bcrypt.hash(password, salt, (err, hash) => {
                    if (err) throw err;
                    connection.query(
                        "INSERT INTO users (email, password, name, birth) VALUES (?, ?, ?, ?)",
                        [email, hash, name, birth],
                        (err) => {
                            if (err) throw err;
                            res.status(200);
                            res.json({
                                msg: "회원가입이 완료되었습니다.",
                                isJoin: true,
                            });
                        }
                    );
                });
            });
            console.log("thorw 테스트");
            return;
        }
    );
});

module.exports = router;
