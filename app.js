var express = require("express");

var server = express();
var port = process.env.PORT;

server.use(express.static(__dirname));

server.get("/", function (req, res) {
  res.sendFile("index.html");
});

server.listen(port, () => {
  console.log(`Server running at ${port}/`);
});
