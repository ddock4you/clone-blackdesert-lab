const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.isLogin = (req, res, next) => {
    try {
        const token = req.cookies.user;
        const decode = jwt.verify(token, process.env.JWT_SECRET);

        if (decode) {
            res.locals.email = decode.email;
            res.locals.name = decode.name;
            next();
        }
    } catch (err) {
        console.log(err);
        res.status(401).json({ msg: "유효하지 않은 계정입니다." });
    }
};
