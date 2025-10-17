const express = require("express");
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: false })); //form direct ga submit chestey
app.use(bodyparser.json())//javascript lonchi data pampiste
var cors = require("cors");
app.use(cors());

var students = require("./UndergradStu.json");

app.get("/", function (req, res) {
  console.log("req received");
  res.send("req received");
});
app.get("/allInfo", function (req, res) {
  res.send(students);
});
app.post("/getInfo", function (req, res) {
  const sdata = req.body;
  console.log(sdata);
  res.send("post");
});

// app.post("/sendInfo", function (req, res) {
//   console.log("post")
// });

app.listen(2000, () => {
  console.log("server running on port no:3500");
});
//
