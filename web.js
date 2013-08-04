// https://coderwall.com/p/-h1h1w
/*jslint node: true, stupid: true */

"use strict";

var express = require('express');
var app = express();

var fs = require('fs');

app.get('/', function (request, response) {
    var indexContents = fs.readFileSync("./index.html", 'utf8');
    response.send(indexContents);
});

var port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log("Listening on " + port);
});
