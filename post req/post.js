// const express = require("express");
// const fs = require("fs");
// const bodyparser = require("body-parser");
// const app = express();

// app.use(express.static(__dirname + "/staticFiles"));//search static files
// app.get("/addData", function (req, res) {
//   console.log(req.query);
//   res.send("received Get Request");
// });
// app.use(bodyparser.urlencoded({ extended: false }));//body parser
// var arrayData = [];
// app.post("/addData", function (req, res) {
//   const data = req.body;
//   arrayData.push(data);
//   console.log(data);
//   console.log(arrayData);
//   fs.writeFileSync("staticFiles/file.txt", JSON.stringify(arrayData));
//   res.send("sent Post Request");
// });

// app.listen(3001, () => {
//   console.log("server running on portno:3001");
// });

const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
app.get("/", (req, res) => {
  res.send("request /form.html");
});
app.use(cors()); // Enable CORS for all routes and origins
app.get("/apiCall", (req, res) => {
  res.send("api called");
});
app.use(express.static(__dirname + "/staticfiles"));
let arrData = [];

const bodyparser = require("body-parser");
//app.use()--middleware
app.use(bodyparser.json()); //javascript lo data oste
app.use(bodyparser.urlencoded({ extended: false })); //form lo unna data ni access cheyatniki.
app.post("/addData", (req, res) => {
  // const bdata = req.body;
  // arrData.push(bdata);
  // console.log(bdata);
  // console.log(arrData);
  // fs.writeFileSync("staticFiles/file.txt", JSON.stringify(arrData));
  // res.send("post request sent");
  console.log(req.query);
  console.log(req.params);
  console.log(req.body);
});

app.listen(2001, () => {
  console.log("server is running on port no:2001");
});
