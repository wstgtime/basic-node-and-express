let express = require('express');
let app = express();

// console.log("Hello World");

const pathToAssets = __dirname + "/public";
app.use("/public", express.static(pathToAssets));

app.get("/", function(req, res) {
    const pathToIndex = __dirname + '/views/index.html';
    res.sendFile(pathToIndex);
});

































 module.exports = app;
