var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs')

app.get('/', function(request, response) {
  indexContents = fs.readFileSync("./index.html", 'utf8')
  response.send(indexContents);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
