require('dotenv').config()
const bodyParser = require('body-parser');

let express = require('express');
let app = express();

// console.log("Hello World");

app.use("/", function(req, res, next) {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

app.get("/now", 
    function(req, res, next) {
        req.time = new Date().toString();
        next();
    },
    function(req, res) {
        res.send({ time: req.time });
    }
);

const pathToAssets = __dirname + "/public";
app.use("/public", express.static(pathToAssets));

app.use("/", bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res) {
    const pathToIndex = __dirname + '/views/index.html';
    res.sendFile(pathToIndex);
});

app.get("/json", function(req, res) {
    const isUppercase = process.env.MESSAGE_STYLE === 'uppercase';
    const messageJson = isUppercase ? {"message": "HELLO JSON"} : {"message": "Hello json"};
    res.json(messageJson);
});

app.get("/:word/echo", function(req, res) {
    res.json({ echo: req.params.word });
});

app.get("/name", function(req, res) {
    res.json({ name: `${req.query.first} ${req.query.last}`});
});

app.post("/name", function(req, res) {
    res.json({ name: `${req.body.first} ${req.body.last}`});
});



module.exports = app;
