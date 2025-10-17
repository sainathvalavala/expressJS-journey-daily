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

//post request
// app.get("/add", function (req, res) {
//   // console.log("request");
//   // console.log(req.params);
//   // console.log(req.query);
//   res.send("received");
// });
// app.post("/add", function (req, res) {
//   console.log("received");
//   console.log(req.params);
//   console.log(req.query);
//   res.send("received");
// });

app.listen(2000, function () {
  console.log("app is running on portno:2000");
});
