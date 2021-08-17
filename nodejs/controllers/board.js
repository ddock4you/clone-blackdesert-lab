const mysql = require("mysql");
const dbconfig = require("../config/database");
const connection = mysql.createConnection(dbconfig);

exports.newsWrite = (req, res) => {
    const { title, subtitle, category, content } = req.body;
    const filename = req.file ? req.file.filename : null;

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
        let data = {};
        connection.query(
            "SELECT COUNT(*) as count FROM news",
            (err, countData) => {
                if (err) {
                    console.log(err);
                }
                data.count = countData[0].count;
                connection.query("SELECT * FROM news", (err, list) => {
                    if (err) {
                        console.log(err);
                    }
                    data.list = list;
                    res.status(200).json({ data });
                });
            }
        );
    } catch (err) {
        console.log(err);
        // res.status(404).json({ msg: "error" });
    }
};
