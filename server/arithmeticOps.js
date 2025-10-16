const express = require("express");
const app = express();
//get - request ni receive cheskuntadi
app.get("/", function (req, res) {
  res.send("server created for portno:3000");
});

app.get("/add/:a/:b", function (req, res) {
  // console.log(req.params);
  res.send(+req.params.a + +req.params.b);
});
app.get("/mul/:a/:b", function (req, res) {
  // console.log(req.params);
  res.send(+req.params.a * +req.params.b);
});
app.get("/div/:a/:b", function (req, res) {
  // console.log(req.params);
  res.send(+req.params.a / +req.params.b);
});
app.get("/sub/:a/:b", function (req, res) {
  // console.log(req.params);
  res.send(+req.params.a - +req.params.b);
});

app.listen(3000, function () {
  console.log("server running on portNo: 3000");
});
