const express = require("express");
const nunjucks = require("nunjucks");
const morgan = require("morgan");
const mysql = require("mysql");

const dbconfig = require("./config/database");
const dotenv = require("dotenv");
const app = express();
const page = require("./routes");
const cookieParser = require("cookie-parser");
const connection = mysql.createConnection(dbconfig);
const { loginCheck } = require("./middlewares/auth");

dotenv.config();
connection.connect((err) => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("DB connected");
});

app.set("port", process.env.PORT || 3001);
app.set("view engine", "html");
nunjucks.configure("views", {
    express: app,
    watch: true,
});

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(
    express.urlencoded({
        extended: false,
    })
);
app.use(cookieParser());

app.use("/", page);

app.listen(app.get("port"), (req, res) => {
    console.log(`Server connected on port ${app.get("port")}`);
});
