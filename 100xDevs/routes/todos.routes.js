const express = require("express");
const router = express.Router();
const todosObject = require("../controllers/todos.controllers");
const fs = require("fs");

router.get("/", todosObject.defaultTodo);
router.get("/addTodo", todosObject.displayTodos);

router.post("/addTodo", todosObject.addTodo);

module.exports = router;

// router.get("/post", (req, res) => {
//   // console.log(__dirname+ "./static/post.html");
//   res.sendFile(__dirname + "./static/post.html");
// });
// console.log(__dirname)