const express = require("express");
const {
    User
} = require("../models");

const router = express.Router();

// 로그인
router.route("/login")
    .get((req, res) => {
        res.render(login);
    })
    .post((req, res) => {
        console.log(req.body);
    });

// 회원가입
router.route("/join")
    .get((req, res) => {
        res.render("join");
    })
    .post(async (req, res) => {
        try {
            const {
                email,
                password,
                birth,
                name
            } = req.body;

            // 중복회원가입 체크
            const exUser = await User.findOne({
                where: {
                    email
                }
            })
            if (exUser) res.status(409).json({
                message: "이미 가입된 이메일이 있습니다."
            });

            const user = await User.create({
                email,
                password,
                birth,
                name
            });
            res.status(201).json({
                user,
                message: "가입이 완료되었습니다."
            });
        } catch (err) {
            console.error(err);
        }
    });

module.exports = router;