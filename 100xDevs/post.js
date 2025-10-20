const express = require("express");

const app = express();
const cors = require("cors");
const fs = require("fs");
app.use(cors());
// const bodyparser = require("body-parser");
// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ a: "hello" });
});
app.get("/addTodo", function (req, res) {
  console.log(req.query);
  res.send("form sent info");
});
app.post("/addTodo", function (req, res) {
  // res.send("post");
  // console.log(req.body);
  // res.send("form sent");
  var f1 = JSON.parse(fs.readFileSync("static/read.txt", "utf-8"));
  // res.status(200).send("Todo received");
  f1.push(req.body);
  fs.writeFileSync("static/read.txt", JSON.stringify(f1));
  res.send(f1);
  console.log("got post request");
  q;
});

app.listen(3000, () => console.log("server is running"));
