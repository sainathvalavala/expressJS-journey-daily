const express = require("express");
const router = express.Router();
const fs = require("fs");

// router.get("/post", (req, res) => {
//   // console.log(__dirname+ "./static/post.html");
//   res.sendFile(__dirname + "./static/post.html");
// });
// console.log(__dirname)
router.get("/addTodo", function (req, res) {
  var f1 = fs.readFileSync("static/read.txt").toString();
  res.json(JSON.parse(f1));
});

router.post("/addTodo", function (req, res) {
  console.log(req.body);
  var f1 = JSON.parse(fs.readFileSync("./static/read.txt"));
  f1.push(req.body);
  fs.writeFileSync("./static/read.txt", JSON.stringify(f1));
  var f2 = fs.readFileSync("./static/fetch.html").toString();
  console.log(f2)
  res.send(f2);
  console.log("form submitted");
});

module.exports = router;
