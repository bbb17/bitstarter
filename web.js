var express = require('express');
var fs = require('fs');
var index = fs.readFileSync("index.html");
var buf = new Buffer(100);


var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	response.send(index.toString("utf8",0,index.length));

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});