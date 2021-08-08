const mysql = require("mysql");
const { restart } = require("nodemon");
const dbconfig = require("../config/database");
const connection = mysql.createConnection(dbconfig);

exports.newsWrite = (req, res) => {
    const { title, subtitle, category, content } = req.body;
    const { filename } = req.file;

    try {
        connection.query(
            "INSERT INTO news (title, subtitle, category, content, thumnail) VALUES (?,?,?,?,?);",
            [title, subtitle, category, content, filename],
            (err, data) => {
                if (err) {
                    res.status(401).json({ msg: "401에러" });
                }
                res.status(200).json({ newsWrite: true, msg: "hi" });
            }
        );
    } catch (err) {
        console.error(err);
        res.status(404).json({ newsWrite: false });
    }
};

exports.newsList = (req, res) => {
    try {
        connection.query("SELECT * FROM news", (err, data) => {
            if (err) {
                console.log(err);
                res.status(401).json({ result: false });
                return;
            }
            res.status(200).json({ result: data });
        });
    } catch (err) {
        console.log(err);
        res.status(404).json({ msg: "error" });
    }
};
