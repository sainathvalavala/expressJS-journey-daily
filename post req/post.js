const express = require("express");
const fs = require("fs");
const bodyparser = require("body-parser");
const app = express();

app.use(express.static(__dirname + "/staticFiles"));//search static files
app.get("/addData", function (req, res) {
  console.log(req.query);
  res.send("received Get Request");
});
app.use(bodyparser.urlencoded({ extended: false }));//body parser
var arrayData = [];
app.post("/addData", function (req, res) {
  const data = req.body;
  arrayData.push(data);
  console.log(data);
  console.log(arrayData);
  fs.writeFileSync("staticFiles/file.txt", JSON.stringify(arrayData));
  res.send("sent Post Request");
});

app.listen(3001, () => {
  console.log("server running on portno:3001");
});
