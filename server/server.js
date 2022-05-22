const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors")
const mysql = require("mysql");
const bodyParser = require("body-parser")

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "126412",
    database: "jejuinfo",
});

connection.connect();

app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
app.use(bodyParser.json());

app.get("/",(req,res) => {
    res.send("제주도 기사")
});

app.get("/article", (req,res)=> {
    connection.query(`select * from article`,
    (err,rows,fields) => {
        res.send(rows)
        console.log(rows);
    });
})

app.listen(port, ()=> {
    console.log('example app listening at jeju')
})