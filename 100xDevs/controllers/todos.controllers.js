const fs = require("fs");

function displayTodos(req, res) {
  var f1 = fs.readFileSync("static/read.txt").toString();
  res.json(JSON.parse(f1));
}

function addTodo(req, res) {
  console.log(req.body);
  var f1 = JSON.parse(fs.readFileSync("./static/read.txt"));
  f1.push(req.body);
  fs.writeFileSync("./static/read.txt", JSON.stringify(f1));
  var f2 = fs.readFileSync("./static/fetch.html").toString();
  // console.log(f2);
  res.send(f2);
  console.log("form submitted");
}

function defaultTodo(req, res) {
  res.json({ a: "hello" });
}

module.exports = { displayTodos, addTodo, defaultTodo };
