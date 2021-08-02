const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.loginCheck = (req, res, next) => {
    res.locals.userName = null;
    res.locals.userEmail = null;
    // try {
    //     const token = req.cookies.user;
    //     const decode = jwt.verify(token, process.env.JWT_SECRET);
    //     if (decode) {
    //         res.locals.userName = decode.name;
    //         res.locals.userEmail = decode.name;
    //     }
    // } catch (err) {
    //     console.error({ err });
    // }
    console.log(res.locals.userName);
    next();
};
