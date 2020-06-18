var express = require("express");

var server = express();
var port = process.env.port || 8080;

server.use(express.static(__dirname));

server.get("/", function (req, res) {
  res.sendFile("index.html");
});
