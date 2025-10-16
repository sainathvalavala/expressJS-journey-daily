var express = require("express");
const app = express();
var studnets = require("./students.json");
var products = require("./products.json");
// console.log(studnets);
app.get("/", function (req, res) {
  res.send("server created to filter students from students.json");
});
app.get("/b/:n", function (req, res) {
  var sname = studnets.filter((x) => {
    if (x.age == req.params.n) {
      return true;
    }
  });
  res.send(sname);
});
app.get("/a/:n", function (req, res) {
  var pname = products.find((x) => {
    if (x.name == req.params.n) {
      return true;
    }
  });
  res.send(pname);
});
app.listen(2, function () {
  console.log("app is running on portno:2000");
});
