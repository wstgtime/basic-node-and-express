require('dotenv').config()

let express = require('express');
let app = express();

// console.log("Hello World");

const pathToAssets = __dirname + "/public";
app.use("/public", express.static(pathToAssets));

app.get("/", function(req, res) {
    const pathToIndex = __dirname + '/views/index.html';
    res.sendFile(pathToIndex);
});

app.get("/json", function(req, res) {
    const isUppercase = process.env.MESSAGE_STYLE === 'uppercase';
    const messageJson = isUppercase ? {"message": "HELLO JSON"} : {"message": "Hello json"};
    res.json(messageJson);
});

































 module.exports = app;
