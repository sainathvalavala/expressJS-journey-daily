const express = require("express");
const app = express();
app.get("/", function (req, res) {
  // console.log(req.url);
  // let a = req.params;
  // console.log(a);
  res.send("enter a endpoint");
});
//http://localhost:443/sum/5/6
app.get("/sum/:num1/:num2", function (req, res) {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  // res.send(req.url);
  res.send(`Sum is ${num1 + num2}`);
});
app.get("/sub/:num1/:num2", function (req, res) {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  // res.send(req.url);
  res.send(`Sub is ${num1 - num2}`);
});
app.get("/div/:num1/:num2", function (req, res) {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  // res.send(req.url);
  res.send(`div is ${num1 / num2}`);
});
app.get("/mul/:num1/:num2", function (req, res) {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  // res.send(req.url);
  res.send(`Mul is ${num1 * num2}`);
});

app.listen(443, () => {
  "server is running on default portno";
});

//query params
/*
Inputs given at the end after `?` are known as query parameters (usually used in GET requests)

The way to get them in an HTTP route is by extracting them from the `req` argument (req.query.a , req.query.b)
*/

app.get("/sum", function (req, res) {
  //http://localhost:3000/add?a=1&b=2
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    ans: a + b,
  });
});

//  http://localhost:3000/multiply?a=1&b=2
app.get("/mul", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.json({
    ans: a * b,
  });
});

// http://localhost:3000/divide?a=1&b=2
app.get("/div", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.json({
    ans: a / b,
  });
});

// .http://localhost:3000/subtract?a=1&b=2
app.get("/sub", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.json({
    ans: a - b,
  });
});
