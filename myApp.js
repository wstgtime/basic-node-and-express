let express = require('express');
let app = express();

// console.log("Hello World");

app.get("/", function(req, res) {
    const pathToIndex = __dirname + '/views/index.html';
    res.sendFile(pathToIndex);
});

































 module.exports = app;
